import React, { useState, useEffect, createContext, useContext } from 'react';

// Contexto para o estado do usuário (chef) e funções de autenticação
const AuthContext = createContext(null);

// Componente para exibir mensagens de erro/sucesso
const MessageModal = ({ message, type, onClose }) => {
  if (!message) return null;

  const bgColorClass = type === 'success' ? 'message-alert-success' : 'message-alert-error';
  const textColorClass = type === 'success' ? 'text-green-700' : 'text-red-700';

  return (
    <div className="message-modal-overlay">
      <div className="message-modal-content">
        <div className={`message-alert ${bgColorClass}`} role="alert">
          <p className="font-bold">{type === 'success' ? 'Sucesso!' : 'Erro!'}</p>
          <p className={textColorClass}>{message}</p>
        </div>
        <div className="message-modal-actions">
          <button
            onClick={onClose}
            className="message-button"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente de Input Reutilizável
const InputField = ({ label, type = 'text', name, value, onChange, placeholder, required = false, onFileChange, filePreview }) => (
  <div className="input-group">
    <label htmlFor={name} className="input-label">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {type === 'file' ? (
      <>
        <input
          type="file"
          id={name}
          name={name}
          onChange={onFileChange}
          required={required}
          className="input-field"
          accept="image/*" // Aceita apenas arquivos de imagem
        />
        {filePreview && (
          <div className="file-preview-container">
            <img src={filePreview} alt="Pré-visualização" className="file-preview-image" />
          </div>
        )}
      </>
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="input-field"
      />
    )}
  </div>
);

// Componente de Botão Reutilizável
const Button = ({ onClick, children, className = '', type = 'button', disabled = false }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`btn ${className} ${disabled ? 'btn-disabled' : ''}`}
  >
    {children}
  </button>
);

// Componente de Navegação
const Navbar = () => {
  const { chef, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">
          SaborBIT
        </a>
        <div className="navbar-links">
          {chef ? (
            <>
              <a href="/dashboard" className="navbar-link">Dashboard</a>
              <Button onClick={logout} className="btn-red">Sair</Button>
            </>
          ) : (
            <>
              <a href="/login" className="navbar-link">Login</a>
              <a href="/register" className="navbar-link">Registrar</a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

// Página de Registro
const RegisterPage = ({ navigate, showMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    restaurantName: '',
    profilePicture: '' // URL da imagem, pode ser um campo opcional
  });
  const [profilePicturePreview, setProfilePicturePreview] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profilePicture: reader.result }); // Armazena a string Base64
        setProfilePicturePreview(reader.result); // Para pré-visualização
      };
      reader.readAsDataURL(file);
    } else {
      setFormData({ ...formData, profilePicture: '' });
      setProfilePicturePreview('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://backend-saborbit.onrender.com/api/beAChef', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        showMessage(data.message, 'success');
        navigate('/login');
      } else {
        showMessage(data.message || 'Erro ao registrar chef.', 'error');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      showMessage('Erro de rede. Tente novamente.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="form-card">
        <h2 className="form-heading">Registrar Chef</h2>
        <form onSubmit={handleSubmit}>
          <InputField label="Nome Completo" name="name" value={formData.name} onChange={handleChange} placeholder="Seu nome" required />
          <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" required />
          <InputField label="Senha" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="********" required />
          <InputField label="Telefone (WhatsApp)" name="phone" value={formData.phone} onChange={handleChange} placeholder="Ex: 5511999998888" required />
          <InputField label="Endereço" name="address" value={formData.address} onChange={handleChange} placeholder="Rua, número, bairro, cidade" required />
          <InputField label="Nome do Restaurante" name="restaurantName" value={formData.restaurantName} onChange={handleChange} placeholder="Nome do seu estabelecimento" required />
          <InputField
            label="Foto de Perfil (Opcional)"
            type="file"
            name="profilePicture"
            onFileChange={handleFileChange}
            filePreview={profilePicturePreview}
          />
          <Button type="submit" className="w-full mt-6" disabled={loading}>
            {loading ? 'Registrando...' : 'Registrar'}
          </Button>
        </form>
        <p className="form-footer-text">
          Já tem uma conta? <a href="/login" className="form-footer-link">Faça Login aqui</a>
        </p>
      </div>
    </div>
  );
};

// Página de Login
const LoginPage = ({ navigate, showMessage }) => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://backend-saborbit.onrender.com/api/loginChef', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        login(data.chef);
        showMessage(data.message, 'success');
        navigate('/dashboard');
      } else {
        showMessage(data.message || 'Erro ao fazer login.', 'error');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      showMessage('Erro de rede. Tente novamente.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="form-card">
        <h2 className="form-heading">Login Chef</h2>
        <form onSubmit={handleSubmit}>
          <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" required />
          <InputField label="Senha" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="********" required />
          <Button type="submit" className="w-full mt-6" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </Button>
        </form>
        <p className="form-footer-text">
          Não tem uma conta? <a href="/register" className="form-footer-link">Registre-se aqui</a>
        </p>
      </div>
    </div>
  );
};

// Dashboard do Chef
const DashboardPage = ({ showMessage }) => {
  const { chef, updateChef, logout } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('profile'); // 'profile', 'menu', 'orders', 'qr', 'plans'
  const [loading, setLoading] = useState(false);

  // Estado para dados do chef
  const [chefData, setChefData] = useState(chef);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profilePicturePreview, setProfilePicturePreview] = useState(chef?.profilePicture || '');


  // Estado para itens do cardápio
  const [menuItems, setMenuItems] = useState([]);
  const [showMenuItemModal, setShowMenuItemModal] = useState(false);
  const [currentMenuItem, setCurrentMenuItem] = useState(null); // Para editar ou criar
  const [menuItemForm, setMenuItemForm] = useState({
    name: '', description: '', price: '', category: '', imageUrl: ''
  });
  const [menuItemImagePreview, setMenuItemImagePreview] = useState('');


  // Estado para pedidos
  const [orders, setOrders] = useState([]);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  // Estado para QR Code
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [qrLoading, setQrLoading] = useState(false);

  useEffect(() => {
    if (!chef) return;
    setChefData(chef); // Sincroniza o estado local com o contexto
    setProfilePicturePreview(chef.profilePicture || ''); // Define a pré-visualização inicial da imagem de perfil
    if (activeTab === 'menu') {
      fetchMenuItems();
    } else if (activeTab === 'orders') {
      fetchOrders();
    }
  }, [chef, activeTab]);

  // Funções para Perfil do Chef
  const handleProfileChange = (e) => {
    setChefData({ ...chefData, [e.target.name]: e.target.value });
  };

  const handleProfileFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setChefData({ ...chefData, profilePicture: reader.result }); // Armazena a string Base64
        setProfilePicturePreview(reader.result); // Para pré-visualização
      };
      reader.readAsDataURL(file);
    } else {
      setChefData({ ...chefData, profilePicture: '' });
      setProfilePicturePreview('');
    }
  };

  const handleUpdateProfile = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://backend-saborbit.onrender.com/api/chefs/${chef._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(chefData),
      });
      const data = await response.json();
      if (response.ok) {
        updateChef(data.chef); // Atualiza o chef no contexto
        showMessage(data.message, 'success');
        setIsEditingProfile(false);
      } else {
        showMessage(data.message || 'Erro ao atualizar perfil.', 'error');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      showMessage('Erro de rede. Tente novamente.', 'error');
    } finally {
      setLoading(false);
    }
  };

  // Funções para Itens do Cardápio
  const fetchMenuItems = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://backend-saborbit.onrender.com/api/chefs/${chef._id}/menuItems`);
      const data = await response.json();
      if (response.ok) {
        setMenuItems(data.menuItems);
      } else {
        setMenuItems([]);
        showMessage(data.message || 'Nenhum item de cardápio encontrado.', 'info');
      }
    } catch (error) {
      console.error('Erro ao buscar itens do cardápio:', error);
      showMessage('Erro ao buscar itens do cardápio.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleMenuItemFormChange = (e) => {
    setMenuItemForm({ ...menuItemForm, [e.target.name]: e.target.value });
  };

  const handleMenuItemFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMenuItemForm({ ...menuItemForm, imageUrl: reader.result }); // Armazena a string Base64
        setMenuItemImagePreview(reader.result); // Para pré-visualização
      };
      reader.readAsDataURL(file);
    } else {
      setMenuItemForm({ ...menuItemForm, imageUrl: '' });
      setMenuItemImagePreview('');
    }
  };

  const handleAddOrUpdateMenuItem = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = currentMenuItem
      ? `https://backend-saborbit.onrender.com/api/menuItems/${currentMenuItem._id}`
      : `https://backend-saborbit.onrender.com/api/chefs/${chef._id}/menuItems`;
    const method = currentMenuItem ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...menuItemForm, chefId: chef._id }),
      });
      const data = await response.json();
      if (response.ok) {
        showMessage(data.message, 'success');
        fetchMenuItems();
        setShowMenuItemModal(false);
        setMenuItemForm({ name: '', description: '', price: '', category: '', imageUrl: '' });
        setCurrentMenuItem(null);
        setMenuItemImagePreview('');
      } else {
        showMessage(data.message || 'Erro ao salvar item do cardápio.', 'error');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      showMessage('Erro de rede. Tente novamente.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteMenuItem = async (itemId) => {
    // Substituído window.confirm por um modal simples ou lógica direta, conforme instruído
    if (!confirm('Tem certeza que deseja excluir este item?')) return; // Usando confirm temporariamente, idealmente substituir por modal customizado
    setLoading(true);
    try {
      const response = await fetch(`https://backend-saborbit.onrender.com/api/menuItems/${itemId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (response.ok) {
        showMessage(data.message, 'success');
        fetchMenuItems();
      } else {
        showMessage(data.message || 'Erro ao excluir item do cardápio.', 'error');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      showMessage('Erro de rede. Tente novamente.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const openMenuItemModal = (item = null) => {
    setCurrentMenuItem(item);
    if (item) {
      setMenuItemForm({
        name: item.name,
        description: item.description,
        price: item.price,
        category: item.category,
        imageUrl: item.imageUrl || ''
      });
      setMenuItemImagePreview(item.imageUrl || '');
    } else {
      setMenuItemForm({ name: '', description: '', price: '', category: '', imageUrl: '' });
      setMenuItemImagePreview('');
    }
    setShowMenuItemModal(true);
  };

  // Funções para Pedidos
  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://backend-saborbit.onrender.com/api/chefs/${chef._id}/orders`);
      const data = await response.json();
      if (response.ok) {
        setOrders(data.orders);
      } else {
        setOrders([]);
        showMessage(data.message || 'Nenhum pedido encontrado.', 'info');
      }
    } catch (error) {
      console.error('Erro ao buscar pedidos:', error);
      showMessage('Erro ao buscar pedidos.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateOrderStatus = async (orderId, newStatus) => {
    setLoading(true);
    try {
      const response = await fetch(`https://backend-saborbit.onrender.com/api/orders/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await response.json();
      if (response.ok) {
        showMessage(data.message, 'success');
        fetchOrders(); // Atualiza a lista de pedidos
      } else {
        showMessage(data.message || 'Erro ao atualizar status do pedido.', 'error');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      showMessage('Erro de rede. Tente novamente.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const openOrderDetailsModal = (order) => {
    setCurrentOrder(order);
    setShowOrderModal(true);
  };

  // Funções para QR Code
  const generateQrCode = async () => {
    setQrLoading(true);
    const publicMenuUrl = `${window.location.origin}/public-menu/${chef._id}`;
    try {
      const response = await fetch('https://backend-saborbit.onrender.com/api/generate-qr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: publicMenuUrl }),
      });
      const data = await response.json();
      if (response.ok) {
        setQrCodeUrl(data.qrCodeUrl);
        showMessage('QR Code gerado com sucesso!', 'success');
      } else {
        showMessage(data.message || 'Erro ao gerar QR Code.', 'error');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      showMessage('Erro de rede. Tente novamente.', 'error');
    } finally {
      setQrLoading(false);
    }
  };

  // Funções para Planos de Assinatura
  const handleSubscribe = async (planType) => {
    setLoading(true);
    try {
      const endpoint = planType === 'mensal' ? '/planMensal' : '/planAnual';
      const response = await fetch(`https://backend-saborbit.onrender.com/api${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailChef: chef.email }),
      });
      const redirectUrl = await response.text(); // Mercado Pago retorna a URL de redirecionamento como texto
      if (response.ok) {
        window.location.href = redirectUrl; // Redireciona para a página de pagamento do Mercado Pago
      } else {
        const errorData = await response.json();
        showMessage(errorData.message || `Erro ao assinar plano ${planType}.`, 'error');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      showMessage('Erro de rede. Tente novamente.', 'error');
    } finally {
      setLoading(false);
    }
  };

  if (!chef) {
    return (
      <div className="page-container">
        <p className="text-gray-700 text-lg">Você precisa estar logado para acessar o Dashboard.</p>
      </div>
    );
  }

  const isPlanActive = chefData.planoAtivo && (!chefData.dataExpiracaoPlano || new Date(chefData.dataExpiracaoPlano) > new Date());
  const expirationDate = chefData.dataExpiracaoPlano ? new Date(chefData.dataExpiracaoPlano).toLocaleDateString('pt-BR') : 'N/A';

  return (
    <div className="dashboard-container">
      <div className="main-content">
        <h1 className="dashboard-heading">Dashboard do Chef</h1>

        <div className="dashboard-card">
          <div className="tab-buttons-container">
            <TabButton label="Perfil" active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
            <TabButton label="Cardápio" active={activeTab === 'menu'} onClick={() => setActiveTab('menu')} />
            <TabButton label="Pedidos" active={activeTab === 'orders'} onClick={() => setActiveTab('orders')} />
            <TabButton label="QR Code" active={activeTab === 'qr'} onClick={() => setActiveTab('qr')} />
            <TabButton label="Planos" active={activeTab === 'plans'} onClick={() => setActiveTab('plans')} />
          </div>

          {/* Seção Perfil */}
          {activeTab === 'profile' && (
            <div className="profile-section">
              <h2 className="section-heading">Meu Perfil</h2>
              <div className="profile-grid">
                <div className="profile-avatar-container">
                  <div className="profile-avatar">
                    {chefData.profilePicture ? (
                      <img src={chefData.profilePicture} alt="Foto de Perfil" className="profile-image" />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="profile-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a4 4 0 00-4 4v1a2 2 0 002 2h8a2 2 0 002-2v-1a4 4 0 00-4-4h-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className="profile-restaurant-name">{chefData.restaurantName}</p>
                  <p className="profile-email">{chefData.email}</p>
                </div>
                <div className="profile-info">
                  <p><strong>Nome:</strong> {isEditingProfile ? <InputField name="name" value={chefData.name} onChange={handleProfileChange} /> : chefData.name}</p>
                  <p><strong>Telefone:</strong> {isEditingProfile ? <InputField name="phone" value={chefData.phone} onChange={handleProfileChange} /> : chefData.phone}</p>
                  <p><strong>Endereço:</strong> {isEditingProfile ? <InputField name="address" value={chefData.address} onChange={handleProfileChange} /> : chefData.address}</p>
                  <p>
                    <strong>Foto de Perfil:</strong>{' '}
                    {isEditingProfile ? (
                      <InputField
                        type="file"
                        name="profilePicture"
                        onFileChange={handleProfileFileChange}
                        filePreview={profilePicturePreview}
                      />
                    ) : (
                      (chefData.profilePicture && <a href={chefData.profilePicture} target="_blank" rel="noopener noreferrer">Ver Imagem</a>) || 'N/A'
                    )}
                  </p>
                  <p className={`profile-status ${isPlanActive ? 'profile-status-active' : 'profile-status-inactive'}`}>
                    Plano Ativo: {isPlanActive ? 'Sim' : 'Não'}
                  </p>
                  <p className="profile-expiration-date">Data de Expiração: {expirationDate}</p>

                  <div className="profile-actions">
                    {isEditingProfile ? (
                      <>
                        <Button onClick={handleUpdateProfile} disabled={loading}>
                          {loading ? 'Salvando...' : 'Salvar Alterações'}
                        </Button>
                        <Button onClick={() => setIsEditingProfile(false)} className="btn-gray">
                          Cancelar
                        </Button>
                      </>
                    ) : (
                      <Button onClick={() => setIsEditingProfile(true)}>
                        Editar Perfil
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Seção Cardápio */}
          {activeTab === 'menu' && (
            <div className="menu-section">
              <h2 className="section-heading">Gerenciar Cardápio</h2>
              <Button onClick={() => openMenuItemModal()} className="mb-6">
                Adicionar Novo Item
              </Button>

              {loading ? (
                <p className="loading-text">Carregando itens do cardápio...</p>
              ) : menuItems.length === 0 ? (
                <p className="empty-state-text">Nenhum item no cardápio ainda. Adicione um!</p>
              ) : (
                <div className="menu-grid">
                  {menuItems.map((item) => (
                    <div key={item._id} className="menu-item">
                      <div>
                        {item.imageUrl ? (
                          <img src={item.imageUrl} alt={item.name} className="menu-item-image" />
                        ) : (
                          <div className="menu-item-image-placeholder">
                            <svg xmlns="http://www.w3.org/2000/svg" className="menu-item-icon" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-4 3 3 5-5V15z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                        <h3 className="menu-item-name">{item.name}</h3>
                        <p className="menu-item-description">{item.description}</p>
                        <p className="menu-item-price">R$ {item.price.toFixed(2)}</p>
                        <p className="menu-item-category">Categoria: {item.category}</p>
                      </div>
                      <div className="menu-item-actions">
                        <Button onClick={() => openMenuItemModal(item)} className="btn-yellow btn-sm">
                          Editar
                        </Button>
                        <Button onClick={() => handleDeleteMenuItem(item._id)} className="btn-red btn-sm">
                          Excluir
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Modal para Adicionar/Editar Item do Cardápio */}
          {showMenuItemModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h3 className="modal-heading">
                  {currentMenuItem ? 'Editar Item do Cardápio' : 'Adicionar Novo Item'}
                </h3>
                <form onSubmit={handleAddOrUpdateMenuItem}>
                  <InputField label="Nome" name="name" value={menuItemForm.name} onChange={handleMenuItemFormChange} required />
                  <InputField label="Descrição" name="description" value={menuItemForm.description} onChange={handleMenuItemFormChange} />
                  <InputField label="Preço" type="number" name="price" value={menuItemForm.price} onChange={handleMenuItemFormChange} required />
                  <InputField label="Categoria" name="category" value={menuItemForm.category} onChange={handleMenuItemFormChange} />
                  <InputField
                    label="Imagem do Item (Opcional)"
                    type="file"
                    name="imageUrl"
                    onFileChange={handleMenuItemFileChange}
                    filePreview={menuItemImagePreview}
                  />
                  <div className="modal-actions">
                    <Button type="button" onClick={() => setShowMenuItemModal(false)} className="btn-gray">
                      Cancelar
                    </Button>
                    <Button type="submit" disabled={loading}>
                      {loading ? 'Salvando...' : 'Salvar'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Seção Pedidos */}
          {activeTab === 'orders' && (
            <div className="orders-section">
              <h2 className="section-heading">Meus Pedidos</h2>
              {loading ? (
                <p className="loading-text">Carregando pedidos...</p>
              ) : orders.length === 0 ? (
                <p className="empty-state-text">Nenhum pedido recebido ainda.</p>
              ) : (
                <div className="orders-table-container">
                  <table className="orders-table">
                    <thead className="table-header">
                      <tr>
                        <th className="table-th">ID do Pedido</th>
                        <th className="table-th">Cliente</th>
                        <th className="table-th">Total</th>
                        <th className="table-th">Status</th>
                        <th className="table-th">Data</th>
                        <th className="table-th">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order._id} className="table-row">
                          <td className="table-td">{order._id.substring(0, 8)}...</td>
                          <td className="table-td">{order.clientName}</td>
                          <td className="table-td">R$ {order.total.toFixed(2)}</td>
                          <td className="table-td">
                            <span className={`status-badge ${
                              order.status === 'pending' ? 'status-pending' :
                              order.status === 'preparing' ? 'status-preparing' :
                              order.status === 'delivered' ? 'status-delivered' :
                              ''
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="table-td">{new Date(order.orderDate).toLocaleDateString('pt-BR')}</td>
                          <td className="table-td table-actions">
                            <Button onClick={() => openOrderDetailsModal(order)} className="btn-blue btn-xs">
                              Ver Detalhes
                            </Button>
                            {order.status === 'pending' && (
                              <Button onClick={() => handleUpdateOrderStatus(order._id, 'preparing')} className="btn-indigo btn-xs">
                                Marcar como Preparando
                              </Button>
                            )}
                             {order.status === 'preparing' && (
                              <Button onClick={() => handleUpdateOrderStatus(order._id, 'delivered')} className="btn-green btn-xs">
                                Marcar como Entregue
                              </Button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Modal de Detalhes do Pedido */}
          {showOrderModal && currentOrder && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h3 className="modal-heading">Detalhes do Pedido #{currentOrder._id.substring(0, 8)}</h3>
                <div className="order-details-content">
                  <p><strong>Cliente:</strong> {currentOrder.clientName}</p>
                  <p><strong>Telefone:</strong> {currentOrder.clientPhone}</p>
                  <p><strong>Endereço:</strong> {currentOrder.clientAddress || 'Não informado'}</p>
                  <p><strong>Observações:</strong> {currentOrder.observations || 'N/A'}</p>
                  <p><strong>Status:</strong> <span className={`status-badge ${
                              currentOrder.status === 'pending' ? 'status-pending' :
                              currentOrder.status === 'preparing' ? 'status-preparing' :
                              currentOrder.status === 'delivered' ? 'status-delivered' :
                              ''
                            }`}>
                              {currentOrder.status}
                            </span></p>
                  <p><strong>Total:</strong> R$ {currentOrder.total.toFixed(2)}</p>
                  <h4 className="order-items-heading">Itens:</h4>
                  <ul className="order-items-list">
                    {currentOrder.items.map((item, index) => (
                      <li key={index} className="order-item-list-item">
                        {item.quantity}x {item.itemName} (R$ {item.unitPrice.toFixed(2)} cada)
                        {item.observations && <span className="order-item-observations">(Obs: {item.observations})</span>}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="modal-actions">
                  <Button onClick={() => setShowOrderModal(false)} className="btn-blue">
                    Fechar
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Seção QR Code */}
          {activeTab === 'qr' && (
            <div className="qr-section">
              <h2 className="section-heading">Gerar QR Code do Cardápio</h2>
              <p className="qr-description">
                Compartilhe este QR Code com seus clientes para que eles acessem seu cardápio online!
              </p>
              <Button onClick={generateQrCode} disabled={qrLoading}>
                {qrLoading ? 'Gerando...' : 'Gerar QR Code'}
              </Button>
              {qrCodeUrl && (
                <div className="qr-display-container">
                  <p className="qr-display-text">Seu QR Code:</p>
                  <img src={qrCodeUrl} alt="QR Code do Cardápio" className="qr-image" />
                  <p className="qr-url-text">
                    URL do seu cardápio: <a href={`${window.location.origin}/public-menu/${chef._id}`} target="_blank" rel="noopener noreferrer" className="qr-url-link">{`${window.location.origin}/public-menu/${chef._id}`}</a>
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Seção Planos */}
          {activeTab === 'plans' && (
            <div className="plans-section">
              <h2 className="section-heading">Meus Planos de Assinatura</h2>
              <div className="plan-status-card">
                <p className={`plan-status-text ${isPlanActive ? 'plan-status-active' : 'plan-status-inactive'}`}>
                  Status do Plano: {isPlanActive ? 'Ativo' : 'Inativo'}
                </p>
                <p className="plan-expiration-text">Data de Expiração: {expirationDate}</p>
                {!isPlanActive && (
                  <p className="plan-inactive-message">Seu plano está inativo ou expirou. Por favor, renove para continuar usando todos os recursos.</p>
                )}
              </div>

              <div className="plans-grid">
                {/* Plano Mensal */}
                <div className="plan-card plan-card-monthly">
                  <h3 className="plan-title">Plano Mensal</h3>
                  <p className="plan-price">R$ 59,90<span className="plan-price-suffix">/mês</span></p>
                  <p className="plan-description">Ideal para começar e testar a plataforma.</p>
                  <ul className="plan-features-list">
                    <li className="plan-feature-item"><span className="plan-feature-icon">&#10003;</span> Cardápio Online Personalizado</li>
                    <li className="plan-feature-item"><span className="plan-feature-icon">&#10003;</span> Gerenciamento de Pedidos</li>
                    <li className="plan-feature-item"><span className="plan-feature-icon">&#10003;</span> Geração de QR Code</li>
                    <li className="plan-feature-item"><span className="plan-feature-icon">&#10003;</span> Suporte Básico</li>
                  </ul>
                  <Button onClick={() => handleSubscribe('mensal')} disabled={loading} className="w-full">
                    {loading ? 'Processando...' : 'Assinar Plano Mensal'}
                  </Button>
                </div>

                {/* Plano Anual */}
                <div className="plan-card plan-card-annual">
                  <span className="plan-badge">MAIS POPULAR!</span>
                  <h3 className="plan-title">Plano Anual</h3>
                  <p className="plan-price">R$ 599,00<span className="plan-price-suffix">/ano</span></p>
                  <p className="plan-description">Economize e tenha acesso completo por 1 ano.</p>
                  <ul className="plan-features-list">
                    <li className="plan-feature-item"><span className="plan-feature-icon">&#10003;</span> Todos os recursos do Plano Mensal</li>
                    <li className="plan-feature-item"><span className="plan-feature-icon">&#10003;</span> Suporte Prioritário</li>
                    <li className="plan-feature-item"><span className="plan-feature-icon">&#10003;</span> Novas funcionalidades exclusivas</li>
                    <li className="plan-feature-item"><span className="plan-feature-icon">&#10003;</span> Renovação automática opcional</li>
                  </ul>
                  <Button onClick={() => handleSubscribe('anual')} disabled={loading} className="w-full btn-purple">
                    {loading ? 'Processando...' : 'Assinar Plano Anual'}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const TabButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`tab-button ${active ? 'tab-button-active' : ''}`}
  >
    {label}
  </button>
);


// Página de Cardápio Público
const PublicMenuPage = ({ chefId, showMessage }) => {
  const [chefInfo, setChefInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cart, setCart] = useState([]);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderFormData, setOrderFormData] = useState({
    clientName: '',
    clientPhone: '',
    clientAddress: '',
    observations: '',
  });
  const [orderLoading, setOrderLoading] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  useEffect(() => {
    const fetchPublicMenuData = async () => {
      setLoading(true);
      setError('');
      try {
        // Fetch chef info
        const chefResponse = await fetch(`https://backend-saborbit.onrender.com/api/public/menu/${chefId}`);
        const chefData = await chefResponse.json();
        if (!chefResponse.ok) {
          throw new Error(chefData.message || 'Erro ao buscar informações do restaurante.');
        }
        setChefInfo(chefData);

        // Fetch menu items
        const menuResponse = await fetch(`https://backend-saborbit.onrender.com/api/public/menu/${chefId}/items`);
        const menuData = await menuResponse.json();
        if (!menuResponse.ok) {
          throw new Error(menuData.message || 'Erro ao buscar itens do cardápio.');
        }
        setMenuItems(menuData.menuItems);

      } catch (err) {
        console.error('Erro ao carregar cardápio público:', err);
        setError(err.message || 'Não foi possível carregar o cardápio. O restaurante pode estar inativo ou não existe.');
      } finally {
        setLoading(false);
      }
    };

    if (chefId) {
      fetchPublicMenuData();
    }
  }, [chefId]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.menuItemId === item._id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.menuItemId === item._id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevCart, { menuItemId: item._id, name: item.name, price: item.price, quantity: 1, observations: '' }];
      }
    });
    showMessage(`${item.name} adicionado ao carrinho!`, 'success');
  };

  const updateCartItemQuantity = (menuItemId, quantity) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.menuItemId === menuItemId ? { ...item, quantity: Math.max(1, quantity) } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const updateCartItemObservations = (menuItemId, observations) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.menuItemId === menuItemId ? { ...item, observations } : item)
      )
    );
  };

  const removeFromCart = (menuItemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.menuItemId !== menuItemId));
    showMessage('Item removido do carrinho.', 'info');
  };

  const getTotalCartPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleOrderFormChange = (e) => {
    setOrderFormData({ ...orderFormData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setOrderLoading(true);
    setWhatsappLink(''); // Reset link
    try {
      const orderItems = cart.map(item => ({
        menuItemId: item.menuItemId,
        quantity: item.quantity,
        observations: item.observations,
      }));

      const payload = {
        chefId: chefId,
        items: orderItems,
        clientName: orderFormData.clientName,
        clientPhone: orderFormData.clientPhone,
        clientAddress: orderFormData.clientAddress,
        observations: orderFormData.observations,
      };

      const response = await fetch('https://backend-saborbit.onrender.com/api/public/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (response.ok) {
        showMessage('Pedido realizado com sucesso!', 'success');
        setWhatsappLink(data.whatsappUrl);
        setCart([]); // Limpa o carrinho
        setShowOrderForm(false);
        setOrderFormData({ clientName: '', clientPhone: '', clientAddress: '', observations: '' });
      } else {
        showMessage(data.message || 'Erro ao realizar pedido.', 'error');
      }
    } catch (error) {
      console.error('Erro de rede ao fazer pedido:', error);
      showMessage('Erro de rede. Tente novamente.', 'error');
    } finally {
      setOrderLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="page-container">
        <p className="loading-text">Carregando cardápio...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-page-container">
        <div className="error-card">
          <h2 className="error-heading">Erro ao Carregar Cardápio</h2>
          <p className="error-message">{error}</p>
          <p className="error-suggestion">Por favor, verifique o link ou tente novamente mais tarde.</p>
        </div>
      </div>
    );
  }

  if (!chefInfo) {
    return (
      <div className="page-container">
        <p className="loading-text">Chef/Restaurante não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="public-menu-page">
      <header className="public-header">
        <h1 className="public-restaurant-name">{chefInfo.restaurantName}</h1>
        <p className="public-address">{chefInfo.address}</p>
        <p className="public-phone">Telefone: {chefInfo.phone}</p>
        {chefInfo.profilePicture && (
          <img src={chefInfo.profilePicture} alt="Logo do Restaurante" className="public-logo" />
        )}
      </header>

      <main className="public-main-grid">
        {/* Seção do Cardápio */}
        <section className="public-menu-section">
          <h2 className="public-section-heading">Nosso Cardápio</h2>
          {menuItems.length === 0 ? (
            <p className="empty-state-text">Nenhum item disponível no cardápio no momento.</p>
          ) : (
            <div className="public-menu-grid">
              {menuItems.map((item) => (
                <div key={item._id} className="public-menu-item">
                  <div>
                    {item.imageUrl ? (
                      <img src={item.imageUrl} alt={item.name} className="public-menu-item-image" />
                    ) : (
                      <div className="public-menu-item-image-placeholder">
                        <svg xmlns="http://www.w3.org/2000/svg" className="public-menu-item-icon" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-4 3 3 5-5V15z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                    <h3 className="public-menu-item-name">{item.name}</h3>
                    <p className="public-menu-item-description">{item.description}</p>
                    <p className="public-menu-item-price">R$ {item.price.toFixed(2)}</p>
                    <p className="public-menu-item-category">Categoria: {item.category}</p>
                  </div>
                  <Button onClick={() => addToCart(item)} className="public-add-to-cart-btn">
                    Adicionar ao Carrinho
                  </Button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Seção do Carrinho */}
        <aside className="public-cart-aside">
          <h2 className="public-cart-heading">Seu Pedido</h2>
          {cart.length === 0 ? (
            <p className="empty-state-text">Seu carrinho está vazio.</p>
          ) : (
            <>
              <ul className="cart-items-list">
                {cart.map((item) => (
                  <li key={item.menuItemId} className="cart-item">
                    <div className="cart-item-details">
                      <p className="cart-item-name">{item.name}</p>
                      <p className="cart-item-price">R$ {item.price.toFixed(2)} x {item.quantity}</p>
                      <InputField
                        type="text"
                        placeholder="Observações do item (ex: sem cebola)"
                        value={item.observations}
                        onChange={(e) => updateCartItemObservations(item.menuItemId, e.target.value)}
                        className="cart-item-observations-input"
                      />
                    </div>
                    <div className="cart-item-controls">
                      <button
                        onClick={() => updateCartItemQuantity(item.menuItemId, item.quantity - 1)}
                        className="cart-control-btn cart-control-btn-minus"
                      >
                        -
                      </button>
                      <span className="cart-item-quantity">{item.quantity}</span>
                      <button
                        onClick={() => updateCartItemQuantity(item.menuItemId, item.quantity + 1)}
                        className="cart-control-btn cart-control-btn-plus"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.menuItemId)}
                        className="cart-control-btn cart-control-btn-remove"
                      >
                        &times;
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="cart-total">
                Total: R$ {getTotalCartPrice().toFixed(2)}
              </div>
              <Button onClick={() => setShowOrderForm(true)} className="public-checkout-btn">
                Finalizar Pedido
              </Button>
            </>
          )}

          {/* Modal do Formulário de Pedido */}
          {showOrderForm && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h3 className="modal-heading">Seus Dados para o Pedido</h3>
                <form onSubmit={handlePlaceOrder}>
                  <InputField label="Seu Nome" name="clientName" value={orderFormData.clientName} onChange={handleOrderFormChange} required />
                  <InputField label="Seu Telefone (WhatsApp)" name="clientPhone" value={orderFormData.clientPhone} onChange={handleOrderFormChange} placeholder="Ex: 5511999998888" required />
                  <InputField label="Seu Endereço (Opcional)" name="clientAddress" value={orderFormData.clientAddress} onChange={handleOrderFormChange} placeholder="Rua, número, bairro, cidade" />
                  <InputField label="Observações Gerais do Pedido (Opcional)" name="observations" value={orderFormData.observations} onChange={handleOrderFormChange} />
                  <div className="modal-actions">
                    <Button type="button" onClick={() => setShowOrderForm(false)} className="btn-gray">
                      Cancelar
                    </Button>
                    <Button type="submit" disabled={orderLoading}>
                      {orderLoading ? 'Enviando...' : 'Enviar Pedido'}
                    </Button>
                  </div>
                </form>
                {whatsappLink && (
                  <div className="whatsapp-link-container">
                    <p className="whatsapp-link-text">Pedido enviado! Clique para abrir no WhatsApp:</p>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                      Abrir WhatsApp com o Pedido
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </aside>
      </main>
    </div>
  );
};


// Componente Principal da Aplicação
const App = () => {
  const [chef, setChef] = useState(JSON.parse(localStorage.getItem('chef')) || null);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('info'); // 'success', 'error', 'info'

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const login = (chefData) => {
    setChef(chefData);
    localStorage.setItem('chef', JSON.stringify(chefData));
  };

  const logout = () => {
    setChef(null);
    localStorage.removeItem('chef');
    navigate('/login');
    showMessage('Você foi desconectado.', 'info');
  };

  const updateChef = (updatedChefData) => {
    setChef(updatedChefData);
    localStorage.setItem('chef', JSON.stringify(updatedChefData));
  };

  const showMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => {
      setMessage('');
    }, 5000); // Mensagem desaparece após 5 segundos
  };

  const closeMessageModal = () => {
    setMessage('');
  };

  const renderPage = () => {
    const pathSegments = currentPath.split('/').filter(Boolean);

    switch (pathSegments[0]) {
      case 'register':
        return <RegisterPage navigate={navigate} showMessage={showMessage} />;
      case 'login':
        return <LoginPage navigate={navigate} showMessage={showMessage} />;
      case 'dashboard':
        return <DashboardPage showMessage={showMessage} />;
      case 'public-menu':
        if (pathSegments[1]) {
          return <PublicMenuPage chefId={pathSegments[1]} showMessage={showMessage} />;
        }
        return <div className="page-container"><p className="empty-state-text">URL de cardápio público inválida.</p></div>;
      default:
        return (
          <div className="welcome-page-container">
            <h1 className="welcome-heading">Bem-vindo ao SaborBIT!</h1>
            <p className="welcome-description">
              A plataforma definitiva para chefs e restaurantes gerenciarem seus cardápios e pedidos online.
            </p>
            <div className="welcome-actions">
              <Button onClick={() => navigate('/login')} className="welcome-btn-login">
                Entrar como Chef
              </Button>
              <Button onClick={() => navigate('/register')} className="welcome-btn-register">
                Quero ser um Chef SaborBIT
              </Button>
            </div>
            <p className="welcome-footer-text">
              Para acessar um cardápio público, utilize a URL fornecida pelo seu chef (ex: /public-menu/ID_DO_CHEF).
            </p>
          </div>
        );
    }
  };

  return (
    <AuthContext.Provider value={{ chef, login, logout, updateChef }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');

        :root {
            --primary-blue: #2563eb; /* blue-600 */
            --primary-blue-dark: #1d4ed8; /* blue-700 */
            --secondary-purple: #8b5cf6; /* purple-500 */
            --secondary-purple-dark: #7c3aed; /* purple-600 */
            --accent-green: #22c55e; /* green-500 */
            --accent-green-dark: #16a34a; /* green-600 */
            --accent-red: #ef4444; /* red-500 */
            --accent-red-dark: #dc2626; /* red-600 */
            --accent-yellow: #f59e0b; /* yellow-500 */
            --accent-yellow-dark: #d97706; /* yellow-600 */
            --gray-light: #f8fafc; /* gray-50 */
            --gray-medium: #e5e7eb; /* gray-200 */
            --gray-dark: #6b7280; /* gray-500 */
            --text-color: #1f2937; /* gray-800 */
            --text-light: #4b5563; /* gray-600 */
        }

        body {
          font-family: 'Inter', sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          background-color: var(--gray-light);
          color: var(--text-color);
        }

        .container {
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 1rem; /* Adicionado padding para telas menores */
        }

        /* Estilos para o input de número (para remover setas) */
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type=number] {
          -moz-appearance: textfield;
        }

        /* Reusable Components Styles */
        .message-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(107, 114, 128, 0.5); /* gray-600 with opacity */
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 50;
            padding: 1rem;
        }

        .message-modal-content {
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); /* shadow-xl */
            padding: 1.5rem;
            max-width: 24rem; /* max-w-sm */
            width: 100%;
        }

        .message-alert {
            border-left-width: 4px;
            padding: 1rem;
            border-radius: 0.25rem;
        }

        .message-alert-success {
            background-color: #dcfce7; /* green-100 */
            border-color: #4ade80; /* green-400 */
            color: #15803d; /* green-700 */
        }

        .message-alert-error {
            background-color: #fee2e2; /* red-100 */
            border-color: #f87171; /* red-400 */
            color: #b91c1c; /* red-700 */
        }

        .message-modal-actions {
            margin-top: 1rem;
            display: flex;
            justify-content: flex-end;
        }

        .message-button {
            padding: 0.5rem 1rem;
            background-color: var(--primary-blue);
            color: white;
            border-radius: 0.375rem;
            font-weight: 700;
            transition: background-color 0.15s ease-in-out;
            border: none; /* Adicionado */
            cursor: pointer; /* Adicionado */
        }

        .message-button:hover {
            background-color: var(--primary-blue-dark);
        }

        .input-group {
            margin-bottom: 1rem;
        }

        .input-label {
            display: block;
            color: var(--text-light);
            font-size: 0.875rem; /* text-sm */
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .input-field {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow */
            appearance: none;
            border: 1px solid #d1d5db; /* border-gray-300 */
            border-radius: 0.5rem;
            width: 100%;
            padding: 0.5rem 0.75rem;
            color: var(--text-color);
            line-height: 1.25;
            transition: all 0.15s ease-in-out;
        }

        .input-field:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5); /* ring-blue-500 */
            border-color: transparent;
        }

        .file-preview-container {
            margin-top: 0.5rem;
            border: 1px solid var(--gray-medium);
            border-radius: 0.5rem;
            padding: 0.5rem;
            display: inline-block; /* Para que o container se ajuste à imagem */
        }

        .file-preview-image {
            max-width: 100px;
            max-height: 100px;
            border-radius: 0.25rem;
            object-fit: cover;
        }

        .btn {
            background-color: var(--primary-blue);
            color: white;
            font-weight: 700;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            transition: background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            cursor: pointer;
            border: none;
        }

        .btn:hover {
            background-color: var(--primary-blue-dark);
        }

        .btn:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5), 0 0 0 2px rgba(0, 0, 0, 0.06); /* focus:ring-blue-500 focus:ring-offset-2 */
        }

        .btn-disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .btn-red {
            background-color: var(--accent-red);
        }
        .btn-red:hover {
            background-color: var(--accent-red-dark);
        }

        .btn-gray {
            background-color: var(--gray-dark);
        }
        .btn-gray:hover {
            background-color: #4b5563; /* gray-700 */
        }

        .btn-yellow {
            background-color: var(--accent-yellow);
        }
        .btn-yellow:hover {
            background-color: var(--accent-yellow-dark);
        }

        .btn-indigo {
            background-color: #6366f1; /* indigo-500 */
        }
        .btn-indigo:hover {
            background-color: #4f46e5; /* indigo-600 */
        }

        .btn-green {
            background-color: var(--accent-green);
        }
        .btn-green:hover {
            background-color: var(--accent-green-dark);
        }

        .btn-sm {
            padding: 0.25rem 0.75rem;
            font-size: 0.875rem; /* text-sm */
        }

        .btn-xs {
            padding: 0.125rem 0.5rem;
            font-size: 0.75rem; /* text-xs */
        }

        .btn-purple {
            background-color: var(--secondary-purple);
        }
        .btn-purple:hover {
            background-color: var(--secondary-purple-dark);
        }

        /* Navbar Styles */
        .navbar {
            background-image: linear-gradient(to right, var(--primary-blue), var(--secondary-purple-dark));
            padding: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */
        }

        .navbar-container {
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 1rem; /* Adicionado padding para telas menores */
        }

        .navbar-brand {
            color: white;
            font-size: 1.875rem; /* text-3xl */
            font-weight: 800;
            letter-spacing: -0.025em; /* tracking-tight */
            text-decoration: none;
            white-space: nowrap; /* Evita quebra de linha */
        }

        .navbar-links {
            display: flex;
            align-items: center;
            gap: 1rem; /* space-x-4 */
        }

        .navbar-link {
            color: white;
            text-decoration: none;
            font-size: 1.125rem; /* text-lg */
            transition: color 0.15s ease-in-out;
            white-space: nowrap; /* Evita quebra de linha */
        }

        .navbar-link:hover {
            color: #bfdbfe; /* blue-200 */
        }

        /* Page Containers */
        .page-container {
            min-height: calc(100vh - 64px); /* Full height minus navbar height */
            background-color: #f3f4f6; /* gray-100 */
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
        }

        .form-card {
            background-color: white;
            padding: 2rem;
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); /* shadow-2xl */
            width: 100%;
            max-width: 28rem; /* max-w-md */
        }

        .form-heading {
            font-size: 2.25rem; /* text-4xl */
            font-weight: 800;
            text-align: center;
            color: var(--text-color);
            margin-bottom: 2rem;
        }
        @media (max-width: 640px) { /* Pequenas telas */
            .form-heading {
                font-size: 1.75rem; /* text-3xl */
            }
        }

        .form-footer-text {
            text-align: center;
            color: var(--text-light);
            font-size: 0.875rem; /* text-sm */
            margin-top: 1.5rem;
        }

        .form-footer-link {
            color: var(--primary-blue);
            text-decoration: none;
            font-weight: 600;
        }

        .form-footer-link:hover {
            text-decoration: underline;
        }

        /* Dashboard Styles */
        .dashboard-container {
            min-height: calc(100vh - 64px);
            background-color: var(--gray-light);
            display: flex;
            flex-direction: column;
        }

        .main-content {
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            padding: 1.5rem;
            flex-grow: 1;
            width: 100%; /* Garante que o conteúdo ocupe a largura total disponível */
        }

        .dashboard-heading {
            font-size: 3rem; /* text-5xl */
            font-weight: 800;
            color: var(--text-color);
            text-align: center;
            margin-bottom: 2.5rem;
        }
        @media (max-width: 768px) { /* Telas médias e pequenas */
            .dashboard-heading {
                font-size: 2.25rem; /* text-4xl */
            }
        }
        @media (max-width: 480px) { /* Telas muito pequenas */
            .dashboard-heading {
                font-size: 1.75rem; /* text-3xl */
            }
        }

        .dashboard-card {
            background-color: white;
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); /* shadow-2xl */
            padding: 1.5rem;
            margin-bottom: 2rem;
        }

        .tab-buttons-container {
            display: flex;
            border-bottom: 1px solid var(--gray-medium);
            margin-bottom: 1.5rem;
            overflow-x: auto; /* Permite rolagem horizontal para tabs em telas pequenas */
            -webkit-overflow-scrolling: touch; /* Melhora a rolagem em iOS */
            white-space: nowrap; /* Evita quebra de linha das tabs */
        }

        .tab-button {
            padding: 0.75rem 1.5rem;
            font-size: 1.125rem; /* text-lg */
            font-weight: 600;
            border-top-left-radius: 0.5rem;
            border-top-right-radius: 0.5rem;
            transition: all 0.2s ease-in-out;
            cursor: pointer;
            border: none;
            background: transparent;
            flex-shrink: 0; /* Impede que os botões encolham */
        }
        @media (max-width: 640px) { /* Pequenas telas */
            .tab-button {
                font-size: 1rem; /* text-base */
                padding: 0.75rem 1rem;
            }
        }

        .tab-button-active {
            background-color: var(--primary-blue);
            color: white;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
        }

        .tab-button:not(.tab-button-active):hover {
            background-color: #f3f4f6; /* gray-100 */
        }

        .section-heading {
            font-size: 1.875rem; /* text-3xl */
            font-weight: 700;
            color: var(--text-color);
            margin-bottom: 1.5rem;
        }
        @media (max-width: 640px) { /* Pequenas telas */
            .section-heading {
                font-size: 1.5rem; /* text-2xl */
            }
        }

        /* Profile Section */
        .profile-section {
            /* No specific container styles, uses dashboard-card padding */
        }

        .profile-grid {
            display: grid;
            grid-template-columns: 1fr; /* Padrão para telas pequenas: uma coluna */
            gap: 1.5rem;
        }
        @media (min-width: 768px) { /* md breakpoint */
            .profile-grid {
                grid-template-columns: 1fr 1fr; /* Duas colunas em telas médias e maiores */
            }
        }

        .profile-avatar-container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .profile-avatar {
            width: 8rem; /* w-32 */
            height: 8rem; /* h-32 */
            border-radius: 9999px; /* rounded-full */
            overflow: hidden;
            border: 4px solid #60a5fa; /* blue-400 */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #e5e7eb; /* gray-200 */
            color: #6b7280; /* gray-600 */
            font-size: 3.75rem; /* text-6xl */
            font-weight: 700;
        }

        .profile-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .profile-icon {
            height: 5rem; /* h-20 */
            width: 5rem; /* w-20 */
            color: var(--gray-dark);
        }

        .profile-restaurant-name {
            font-size: 1.25rem; /* text-xl */
            font-weight: 600;
            color: var(--text-color);
        }
        @media (max-width: 640px) {
            .profile-restaurant-name {
                font-size: 1.125rem; /* text-lg */
            }
        }

        .profile-email {
            color: var(--text-light);
            font-size: 0.875rem; /* text-sm */
        }

        .profile-info {
            line-height: 1.5; /* space-y-4 */
        }

        .profile-info p {
            margin-bottom: 1rem;
        }

        .profile-status {
            font-weight: 700;
        }

        .profile-status-active {
            color: var(--accent-green-dark);
        }

        .profile-status-inactive {
            color: var(--accent-red-dark);
        }

        .profile-expiration-date {
            color: var(--text-light);
        }

        .profile-actions {
            display: flex;
            flex-wrap: wrap; /* Permite que os botões quebrem para a próxima linha */
            gap: 1rem; /* space-x-4 */
            margin-top: 1.5rem;
            justify-content: center; /* Centraliza botões em telas pequenas */
        }

        /* Menu Section */
        .menu-section {
            /* No specific container styles */
        }

        .menu-grid {
            display: grid;
            grid-template-columns: 1fr; /* Padrão para telas pequenas: uma coluna */
            gap: 1.5rem;
        }
        @media (min-width: 768px) { /* md breakpoint */
            .menu-grid {
                grid-template-columns: repeat(2, 1fr); /* Duas colunas em telas médias */
            }
        }
        @media (min-width: 1024px) { /* lg breakpoint */
            .menu-grid {
                grid-template-columns: repeat(3, 1fr); /* Três colunas em telas grandes */
            }
        }

        .menu-item {
            background-color: #f9fafb; /* gray-50 */
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .menu-item-image {
            width: 100%;
            height: 10rem; /* h-40 */
            object-fit: cover;
            border-radius: 0.375rem; /* rounded-md */
            margin-bottom: 1rem;
        }

        .menu-item-image-placeholder {
            width: 100%;
            height: 10rem; /* h-40 */
            background-color: var(--gray-medium);
            border-radius: 0.375rem; /* rounded-md */
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gray-dark);
        }

        .menu-item-icon {
            height: 4rem; /* h-16 */
            width: 4rem; /* w-16 */
        }

        .menu-item-name {
            font-size: 1.25rem; /* text-xl */
            font-weight: 600;
            color: var(--text-color);
            margin-bottom: 0.5rem;
        }

        .menu-item-description {
            color: var(--text-light);
            font-size: 0.875rem; /* text-sm */
            margin-bottom: 0.5rem;
        }

        .menu-item-price {
            color: var(--primary-blue);
            font-weight: 700;
            font-size: 1.125rem; /* text-lg */
            margin-bottom: 1rem;
        }

        .menu-item-category {
            color: var(--gray-dark);
            font-size: 0.75rem; /* text-xs */
        }

        .menu-item-actions {
            display: flex;
            flex-wrap: wrap; /* Permite que os botões quebrem */
            gap: 0.5rem; /* space-x-2 */
            margin-top: 1rem;
            justify-content: center; /* Centraliza botões em telas pequenas */
        }

        /* Modals (General) */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(107, 114, 128, 0.5); /* gray-600 with opacity */
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 50;
            padding: 1rem;
        }

        .modal-content {
            background-color: white;
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); /* shadow-xl */
            padding: 1.5rem;
            max-width: 32rem; /* max-w-lg */
            width: 100%;
            max-height: 90vh; /* Limita a altura do modal */
            overflow-y: auto; /* Adiciona scroll se o conteúdo for muito grande */
        }
        @media (max-width: 640px) {
            .modal-content {
                padding: 1rem;
            }
        }

        .modal-heading {
            font-size: 1.5rem; /* text-2xl */
            font-weight: 700;
            color: var(--text-color);
            margin-bottom: 1.5rem;
        }
        @media (max-width: 640px) {
            .modal-heading {
                font-size: 1.25rem; /* text-xl */
            }
        }

        .modal-actions {
            display: flex;
            justify-content: flex-end;
            gap: 1rem; /* space-x-4 */
            margin-top: 1.5rem;
            flex-wrap: wrap; /* Permite que os botões quebrem */
        }

        /* Orders Section */
        .orders-section {
            /* No specific container styles */
        }

        .orders-table-container {
            overflow-x: auto; /* Essencial para tabelas responsivas */
            -webkit-overflow-scrolling: touch; /* Melhora a rolagem em iOS */
        }

        .orders-table {
            min-width: 600px; /* Largura mínima para a tabela */
            width: 100%; /* Ocupa 100% da largura disponível no contêiner */
            background-color: white;
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            border-collapse: collapse; /* Ensure borders collapse for clean table */
        }

        .table-header {
            background-color: var(--gray-medium);
        }

        .table-th {
            padding: 0.75rem 1rem;
            text-align: left;
            font-size: 0.875rem; /* text-sm */
            font-weight: 600;
            color: #374151; /* gray-700 */
            white-space: nowrap; /* Evita quebra de linha no cabeçalho */
        }
        @media (max-width: 640px) {
            .table-th {
                font-size: 0.75rem; /* text-xs */
                padding: 0.5rem 0.75rem;
            }
        }

        .table-row {
            border-bottom: 1px solid var(--gray-medium);
        }

        .table-row:hover {
            background-color: #f9fafb; /* gray-50 */
        }

        .table-td {
            padding: 0.75rem 1rem;
            color: var(--text-color);
            font-size: 0.875rem; /* text-sm */
            white-space: nowrap; /* Evita quebra de linha no conteúdo da célula */
        }
        @media (max-width: 640px) {
            .table-td {
                font-size: 0.75rem; /* text-xs */
                padding: 0.5rem 0.75rem;
            }
        }

        .status-badge {
            padding: 0.25rem 0.5rem;
            border-radius: 9999px; /* rounded-full */
            font-size: 0.75rem; /* text-xs */
            font-weight: 600;
            display: inline-block;
        }

        .status-pending {
            background-color: #fef3c7; /* yellow-100 */
            color: #92400e; /* yellow-800 */
        }

        .status-preparing {
            background-color: #e0f2fe; /* blue-100 */
            color: #1e40af; /* blue-800 */
        }

        .status-delivered {
            background-color: #d1fae5; /* green-100 */
            color: #065f46; /* green-800 */
        }

        .table-actions {
            display: flex;
            flex-wrap: wrap; /* Permite que os botões quebrem */
            gap: 0.5rem; /* space-x-2 */
            justify-content: center; /* Centraliza em telas pequenas */
        }

        /* Order Details Modal */
        .order-details-content {
            line-height: 1.5; /* space-y-4 */
            color: var(--text-light);
            font-size: 0.875rem; /* text-sm */
        }
        @media (max-width: 640px) {
            .order-details-content {
                font-size: 0.8rem; /* Ajuste para telas menores */
            }
        }

        .order-details-content p {
            margin-bottom: 0.5rem;
        }

        .order-items-heading {
            font-size: 1.25rem; /* text-xl */
            font-weight: 600;
            margin-top: 1rem;
        }
        @media (max-width: 640px) {
            .order-items-heading {
                font-size: 1rem; /* text-lg */
            }
        }

        .order-items-list {
            list-style: disc;
            list-style-position: inside;
            margin-left: 1rem; /* ml-4 */
        }

        .order-item-list-item {
            margin-bottom: 0.25rem;
        }

        .order-item-observations {
            font-size: 0.875rem; /* text-sm */
            color: var(--gray-dark);
            margin-left: 0.5rem;
        }

        /* QR Code Section */
        .qr-section {
            /* No specific container styles */
        }

        .qr-description {
            color: var(--text-light);
            margin-bottom: 1rem;
            text-align: center; /* Centraliza a descrição */
        }

        .qr-display-container {
            margin-top: 2rem;
            text-align: center;
            background-color: #f9fafb; /* gray-50 */
            padding: 1.5rem;
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
        }
        @media (max-width: 640px) {
            .qr-display-container {
                padding: 1rem;
            }
        }

        .qr-display-text {
            color: var(--text-light);
            margin-bottom: 1rem;
        }

        .qr-image {
            margin-left: auto;
            margin-right: auto;
            border: 4px solid var(--gray-medium);
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
            max-width: 250px;
            width: 100%; /* Garante que a imagem se ajuste ao contêiner */
            height: auto;
        }

        .qr-url-text {
            margin-top: 1rem;
            font-size: 0.875rem; /* text-sm */
            color: var(--gray-dark);
            word-break: break-all; /* break-words */
        }
        @media (max-width: 640px) {
            .qr-url-text {
                font-size: 0.75rem; /* text-xs */
            }
        }

        .qr-url-link {
            color: var(--primary-blue);
            text-decoration: none;
        }

        .qr-url-link:hover {
            text-decoration: underline;
        }

        /* Plans Section */
        .plans-section {
            /* No specific container styles */
        }

        .plan-status-card {
            background-color: #f9fafb; /* gray-50 */
            padding: 1.5rem;
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            margin-bottom: 1.5rem;
            text-align: center; /* Centraliza o texto */
        }
        @media (max-width: 640px) {
            .plan-status-card {
                padding: 1rem;
            }
        }

        .plan-status-text {
            font-size: 1.25rem; /* text-xl */
            font-weight: 600;
            margin-bottom: 0.5rem;
        }
        @media (max-width: 640px) {
            .plan-status-text {
                font-size: 1.125rem; /* text-lg */
            }
        }

        .plan-status-active {
            color: var(--accent-green-dark);
        }

        .plan-status-inactive {
            color: var(--accent-red-dark);
        }

        .plan-expiration-text {
            color: var(--text-light);
            font-size: 0.875rem; /* text-sm */
        }

        .plan-inactive-message {
            color: var(--accent-red);
            margin-top: 0.5rem;
            font-weight: 500;
            font-size: 0.875rem; /* text-sm */
        }

        .plans-grid {
            display: grid;
            grid-template-columns: 1fr; /* Padrão para telas pequenas: uma coluna */
            gap: 2rem; /* gap-8 */
        }
        @media (min-width: 768px) { /* md breakpoint */
            .plans-grid {
                grid-template-columns: repeat(2, 1fr); /* Duas colunas em telas médias e maiores */
            }
        }

        .plan-card {
            background-color: white;
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            position: relative;
        }
        @media (max-width: 640px) {
            .plan-card {
                padding: 1rem;
            }
        }

        .plan-card-monthly {
            border: 1px solid #bfdbfe; /* blue-200 */
        }

        .plan-card-annual {
            border: 1px solid #ddd6fe; /* purple-200 */
        }

        .plan-badge {
            position: absolute;
            top: 0;
            right: 0;
            background-color: #facc15; /* yellow-400 */
            color: #78350f; /* yellow-900 */
            font-size: 0.75rem; /* text-xs */
            font-weight: 700;
            padding: 0.25rem 0.75rem;
            border-bottom-left-radius: 0.5rem;
            border-top-right-radius: 0.75rem;
        }

        .plan-title {
            font-size: 1.875rem; /* text-3xl */
            font-weight: 700;
            margin-bottom: 1rem;
        }
        @media (max-width: 640px) {
            .plan-title {
                font-size: 1.5rem; /* text-2xl */
            }
        }

        .plan-card-monthly .plan-title {
            color: #1e40af; /* blue-700 */
        }

        .plan-card-annual .plan-title {
            color: #6d28d9; /* purple-700 */
        }

        .plan-price {
            font-size: 3rem; /* text-5xl */
            font-weight: 800;
            color: var(--text-color);
            margin-bottom: 1rem;
        }
        @media (max-width: 640px) {
            .plan-price {
                font-size: 2.5rem; /* text-4xl */
            }
        }

        .plan-price-suffix {
            font-size: 1.25rem; /* text-xl */
            font-weight: 400;
            color: var(--text-light);
        }

        .plan-description {
            color: var(--text-light);
            margin-bottom: 1.5rem;
            font-size: 0.875rem; /* text-sm */
        }

        .plan-features-list {
            text-align: left;
            color: var(--text-light);
            line-height: 1.5; /* space-y-2 */
            margin-bottom: 2rem;
            font-size: 0.875rem; /* text-sm */
        }

        .plan-feature-item {
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
        }

        .plan-feature-icon {
            color: var(--accent-green);
            margin-right: 0.5rem;
        }

        /* Public Menu Page Styles */
        .public-menu-page {
            min-height: 100vh;
            background-color: var(--gray-light);
            display: flex;
            flex-direction: column;
        }

        .public-header {
            background-image: linear-gradient(to right, var(--primary-blue), var(--secondary-purple-dark));
            padding: 1.5rem;
            color: white;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */
            text-align: center;
        }
        @media (max-width: 640px) {
            .public-header {
                padding: 1rem;
            }
        }

        .public-restaurant-name {
            font-size: 3rem; /* text-5xl */
            font-weight: 800;
            letter-spacing: -0.025em; /* tracking-tight */
            margin-bottom: 0.5rem;
        }
        @media (max-width: 768px) {
            .public-restaurant-name {
                font-size: 2.25rem; /* text-4xl */
            }
        }
        @media (max-width: 480px) {
            .public-restaurant-name {
                font-size: 1.75rem; /* text-3xl */
            }
        }

        .public-address {
            font-size: 1.25rem; /* text-xl */
            font-weight: 300;
        }
        @media (max-width: 640px) {
            .public-address {
                font-size: 1rem; /* text-base */
            }
        }

        .public-phone {
            font-size: 1.125rem; /* text-lg */
            font-weight: 300;
        }
        @media (max-width: 640px) {
            .public-phone {
                font-size: 0.875rem; /* text-sm */
            }
        }

        .public-logo {
            margin-left: auto;
            margin-right: auto;
            margin-top: 1rem;
            width: 6rem; /* w-24 */
            height: 6rem; /* h-24 */
            border-radius: 9999px; /* rounded-full */
            border: 4px solid white;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            object-fit: cover;
        }

        .public-main-grid {
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            padding: 1.5rem;
            flex-grow: 1;
            display: grid;
            grid-template-columns: 1fr; /* Padrão para telas pequenas: uma coluna */
            gap: 2rem; /* gap-8 */
        }
        @media (min-width: 1024px) { /* lg breakpoint */
            .public-main-grid {
                grid-template-columns: 2fr 1fr; /* Duas colunas em telas grandes */
            }
        }
        @media (max-width: 640px) {
            .public-main-grid {
                padding: 1rem;
            }
        }

        .public-menu-section {
            background-color: white;
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); /* shadow-2xl */
            padding: 1.5rem;
        }
        @media (max-width: 640px) {
            .public-menu-section {
                padding: 1rem;
            }
        }

        .public-section-heading {
            font-size: 2.25rem; /* text-4xl */
            font-weight: 800;
            color: var(--text-color);
            margin-bottom: 2rem;
            text-align: center;
        }
        @media (max-width: 640px) {
            .public-section-heading {
                font-size: 1.75rem; /* text-3xl */
            }
        }

        .public-menu-grid {
            display: grid;
            grid-template-columns: 1fr; /* Padrão para telas pequenas: uma coluna */
            gap: 1.5rem;
        }
        @media (min-width: 768px) { /* md breakpoint */
            .public-menu-grid {
                grid-template-columns: repeat(2, 1fr); /* Duas colunas em telas médias */
            }
        }

        .public-menu-item {
            background-color: #f9fafb; /* gray-50 */
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .public-menu-item-image {
            width: 100%;
            height: 10rem; /* h-40 */
            object-fit: cover;
            border-radius: 0.375rem; /* rounded-md */
            margin-bottom: 1rem;
        }

        .public-menu-item-image-placeholder {
            width: 100%;
            height: 10rem; /* h-40 */
            background-color: var(--gray-medium);
            border-radius: 0.375rem; /* rounded-md */
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gray-dark);
        }

        .public-menu-item-icon {
            height: 4rem; /* h-16 */
            width: 4rem; /* w-16 */
        }

        .public-menu-item-name {
            font-size: 1.5rem; /* text-2xl */
            font-weight: 600;
            color: var(--text-color);
            margin-bottom: 0.5rem;
        }
        @media (max-width: 640px) {
            .public-menu-item-name {
                font-size: 1.25rem; /* text-xl */
            }
        }

        .public-menu-item-description {
            color: var(--text-light);
            font-size: 0.875rem; /* text-sm */
            margin-bottom: 0.5rem;
        }

        .public-menu-item-price {
            color: var(--primary-blue);
            font-weight: 700;
            font-size: 1.25rem; /* text-xl */
            margin-bottom: 1rem;
        }
        @media (max-width: 640px) {
            .public-menu-item-price {
                font-size: 1.125rem; /* text-lg */
            }
        }

        .public-menu-item-category {
            color: var(--gray-dark);
            font-size: 0.75rem; /* text-xs */
        }

        .public-add-to-cart-btn {
            margin-top: 1rem;
            width: 100%;
        }

        /* Cart Section */
        .public-cart-aside {
            background-color: white;
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); /* shadow-2xl */
            padding: 1.5rem;
            height: fit-content;
            position: sticky;
            top: 1.5rem; /* top-6 */
        }
        @media (max-width: 1023px) { /* Em telas menores que lg, remove o sticky e ajusta padding */
            .public-cart-aside {
                position: static;
                padding: 1rem;
            }
        }

        .public-cart-heading {
            font-size: 1.875rem; /* text-3xl */
            font-weight: 800;
            color: var(--text-color);
            margin-bottom: 1.5rem;
            text-align: center;
        }
        @media (max-width: 640px) {
            .public-cart-heading {
                font-size: 1.5rem; /* text-2xl */
            }
        }

        .cart-items-list {
            list-style: none;
            padding: 0;
            margin-bottom: 1.5rem;
            line-height: 1.5; /* space-y-4 */
        }

        .cart-item {
            display: flex;
            flex-direction: column; /* Coloca itens em coluna em telas pequenas */
            align-items: flex-start; /* Alinha itens à esquerda */
            justify-content: space-between;
            background-color: #f9fafb; /* gray-50 */
            padding: 0.75rem;
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
            margin-bottom: 1rem;
        }
        @media (min-width: 641px) { /* A partir de telas médias, volta para linha */
            .cart-item {
                flex-direction: row;
                align-items: center;
            }
        }

        .cart-item-details {
            flex-grow: 1;
            width: 100%; /* Ocupa largura total em coluna */
        }

        .cart-item-name {
            font-weight: 600;
            color: var(--text-color);
            font-size: 1rem; /* text-base */
        }

        .cart-item-price {
            font-size: 0.875rem; /* text-sm */
            color: var(--text-light);
        }

        .cart-item-observations-input {
            margin-top: 0.5rem;
            font-size: 0.875rem; /* text-sm */
            width: 100%;
            border: 1px solid #d1d5db;
            border-radius: 0.25rem;
            padding: 0.25rem 0.5rem;
        }

        .cart-item-controls {
            display: flex;
            align-items: center;
            gap: 0.5rem; /* space-x-2 */
            margin-top: 0.75rem; /* Espaçamento quando em coluna */
            margin-left: 0; /* Remove margin-left em coluna */
            width: 100%; /* Ocupa largura total em coluna */
            justify-content: flex-end; /* Alinha controles à direita em coluna */
        }
        @media (min-width: 641px) { /* A partir de telas médias, volta para linha */
            .cart-item-controls {
                margin-top: 0;
                margin-left: 1rem; /* ml-4 */
                width: auto;
                justify-content: flex-start;
            }
        }

        .cart-control-btn {
            background-color: #e5e7eb; /* gray-200 */
            color: #374151; /* gray-700 */
            border-radius: 9999px; /* rounded-full */
            width: 2rem; /* w-8 */
            height: 2rem; /* h-8 */
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.15s ease-in-out;
            cursor: pointer;
            border: none;
            font-weight: 700;
        }

        .cart-control-btn:hover {
            background-color: #d1d5db; /* gray-300 */
        }

        .cart-control-btn-minus {
            background-color: #fee2e2; /* red-200 */
            color: #b91c1c; /* red-700 */
        }
        .cart-control-btn-minus:hover {
            background-color: #fca5a5; /* red-300 */
        }

        .cart-control-btn-plus {
            background-color: #d1fae5; /* green-200 */
            color: #065f46; /* green-700 */
        }
        .cart-control-btn-plus:hover {
            background-color: #a7f3d0; /* green-300 */
        }

        .cart-item-quantity {
            font-weight: 700;
            color: var(--text-color);
        }

        .cart-total {
            text-align: right;
            font-size: 1.5rem; /* text-2xl */
            font-weight: 700;
            color: var(--text-color);
            margin-bottom: 1.5rem;
        }
        @media (max-width: 640px) {
            .cart-total {
                font-size: 1.25rem; /* text-xl */
            }
        }

        .public-checkout-btn {
            width: 100%;
        }

        /* Error Page Styles */
        .error-page-container {
            min-height: calc(100vh - 64px);
            background-color: #fef2f2; /* red-100 */
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
        }

        .error-card {
            background-color: white;
            padding: 2rem;
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); /* shadow-2xl */
            text-align: center;
            width: 100%;
            max-width: 28rem; /* max-w-md */
        }
        @media (max-width: 640px) {
            .error-card {
                padding: 1.5rem;
            }
        }

        .error-heading {
            font-size: 1.875rem; /* text-3xl */
            font-weight: 700;
            color: #b91c1c; /* red-700 */
            margin-bottom: 1rem;
        }
        @media (max-width: 640px) {
            .error-heading {
                font-size: 1.5rem; /* text-2xl */
            }
        }

        .error-message {
            color: #dc2626; /* red-600 */
            font-size: 1rem; /* text-base */
        }

        .error-suggestion {
            color: var(--text-light);
            margin-top: 1rem;
            font-size: 0.875rem; /* text-sm */
        }

        /* Welcome Page Styles */
        .welcome-page-container {
            min-height: calc(100vh - 64px);
            background-color: #f3f4f6; /* gray-100 */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            text-align: center;
        }

        .welcome-heading {
            font-size: 3.75rem; /* text-6xl */
            font-weight: 800;
            color: var(--primary-blue-dark);
            margin-bottom: 1.5rem;
        }
        @media (max-width: 768px) {
            .welcome-heading {
                font-size: 3rem; /* text-5xl */
            }
        }
        @media (max-width: 480px) {
            .welcome-heading {
                font-size: 2.25rem; /* text-4xl */
            }
        }

        .welcome-description {
            font-size: 1.25rem; /* text-xl */
            color: var(--text-light);
            margin-bottom: 2rem;
            max-width: 80%; /* Limita a largura da descrição */
        }
        @media (max-width: 640px) {
            .welcome-description {
                font-size: 1rem; /* text-base */
            }
        }

        .welcome-actions {
            display: flex;
            gap: 1rem; /* space-x-4 */
            flex-wrap: wrap; /* Permite que os botões quebrem para a próxima linha */
            justify-content: center;
        }

        .welcome-btn-login, .welcome-btn-register {
            padding: 0.75rem 2rem; /* px-8 py-3 */
            font-size: 1.25rem; /* text-xl */
        }
        @media (max-width: 640px) {
            .welcome-btn-login, .welcome-btn-register {
                width: 100%; /* Botões ocupam largura total em telas pequenas */
                padding: 0.75rem 1.5rem;
                font-size: 1rem; /* text-base */
            }
        }

        .welcome-btn-register {
            background-color: var(--accent-green);
        }
        .welcome-btn-register:hover {
            background-color: var(--accent-green-dark);
        }

        .welcome-footer-text {
            color: var(--gray-dark);
            font-size: 0.875rem; /* text-sm */
            margin-top: 3rem;
            max-width: 80%; /* Limita a largura */
        }
        @media (max-width: 640px) {
            .welcome-footer-text {
                font-size: 0.75rem; /* text-xs */
            }
        }

        /* WhatsApp Link Container */
        .whatsapp-link-container {
            margin-top: 1.5rem;
            padding: 1rem;
            background-color: #d1fae5; /* green-100 */
            color: #065f46; /* green-800 */
            border-radius: 0.5rem; /* rounded-lg */
            font-size: 0.875rem; /* text-sm */
        }

        .whatsapp-link-text {
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .whatsapp-link {
            color: var(--primary-blue);
            text-decoration: underline;
            word-break: break-all;
        }
        .whatsapp-link:hover {
            color: var(--primary-blue-dark);
        }

        /* Common Utility Classes (mantidas para compatibilidade e clareza, mas com media queries para responsividade) */
        .w-full { width: 100%; }
        .mt-6 { margin-top: 1.5rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mt-4 { margin-top: 1rem; }
        .ml-4 { margin-left: 1rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .text-center { text-align: center; }
        .font-bold { font-weight: 700; }
        .font-semibold { font-weight: 600; }
        .font-extrabold { font-weight: 800; }
        .text-lg { font-size: 1.125rem; }
        .text-xl { font-size: 1.25rem; }
        .text-3xl { font-size: 1.875rem; }
        .text-4xl { font-size: 2.25rem; }
        .text-sm { font-size: 0.875rem; }
        .text-xs { font-size: 0.75rem; }
        .text-gray-700 { color: #374151; }
        .text-gray-600 { color: #4b5563; }
        .text-gray-800 { color: #1f2937; }
        .text-red-500 { color: #ef4444; }
        .text-red-700 { color: #b91c1c; }
        .text-green-500 { color: #22c55e; }
        .text-green-700 { color: #15803d; }
        .list-disc { list-style-type: disc; }
        .list-inside { list-style-position: inside; }
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .items-center { align-items: center; }
        .justify-center { justify-content: center; }
        .justify-between { justify-content: space-between; }
        .justify-end { justify-content: flex-end; }
        .grid { display: grid; }
        .gap-6 { gap: 1.5rem; }
        .gap-8 { gap: 2rem; }
        /* Ajustes para space-x e space-y para serem mais responsivos */
        .space-x-4 > *:not([hidden]) ~ *:not([hidden]) { margin-left: 1rem; }
        .space-y-4 > *:not([hidden]) ~ *:not([hidden]) { margin-top: 1rem; }
        .space-x-2 > *:not([hidden]) ~ *:not([hidden]) { margin-left: 0.5rem; }
        .space-y-2 > *:not([hidden]) ~ *:not([hidden]) { margin-top: 0.5rem; }
        @media (max-width: 640px) { /* Em telas pequenas, remove margens horizontais para empilhamento */
            .space-x-4 > *:not([hidden]) ~ *:not([hidden]),
            .space-x-2 > *:not([hidden]) ~ *:not([hidden]) {
                margin-left: 0;
            }
        }

        .overflow-hidden { overflow: hidden; }
        .overflow-x-auto { overflow-x: auto; }
        .h-fit { height: fit-content; }
        .sticky { position: sticky; }
        .top-6 { top: 1.5rem; }
      `}</style>
      <Navbar />
      {renderPage()}
      <MessageModal message={message} type={messageType} onClose={closeMessageModal} />
    </AuthContext.Provider>
  );
};

export default App;
