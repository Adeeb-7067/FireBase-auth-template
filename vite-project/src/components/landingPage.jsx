import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Nav, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  Home, 
  Bell, 
  MessageCircle, 
  Wallet, 
  User, 
  Settings, 
  Heart,
  Share,
  MessageSquare,
  LogOut,
  Search,
  MoreVertical
} from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [activeTab, setActiveTab] = useState('artists');

  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Bell, label: "Notifications", href: "#" },
    { icon: MessageCircle, label: "Messages", href: "#" },
    { icon: Wallet, label: "Orders", href: "#" },
    { icon: User, label: "My Profile", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
  ];

  const posts = [
    {
      username: "Laura Lawrence",
      userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      artImage: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      likes: 936,
      comments: 84,
      shares: 22,
      price: 955
    },
    {
      username: "Thomas J.",
      userImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      artImage: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      likes: 936,
      comments: 84,
      shares: 22,
      price: 520
    },
  ];

  const photos = [
    { 
      id: 1, 
      image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      price: 520
    },
    { 
      id: 2, 
      image: "https://images.unsplash.com/photo-1580136579202-9c2582caa15e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      price: 955
    },
    { 
      id: 3, 
      image: "https://images.unsplash.com/photo-1579783902600-ca1a3cc36aad?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      price: 539
    },
    { 
      id: 4, 
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      price: 520
    },
    { 
      id: 5, 
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      price: 520
    },
  ];

  const artists = [
    {
      id: 1,
      name: "Thomas Edward",
      username: "@thewildwithyou",
      image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4",
      coverImage: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
      price: null
    },
    {
      id: 2,
      name: "Chris Doe",
      username: "@thewildwithyou",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      coverImage: "https://images.unsplash.com/photo-1580136579312-94651dfd596d",
      price: 520
    },
    {
      id: 3,
      name: "Emilie Jones",
      username: "@thewildwithyou",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      coverImage: "https://images.unsplash.com/photo-1579783902600-ca1a3cc36aad",
      price: null
    },
    {
      id: 4,
      name: "Jessica Williams",
      username: "@thewildwithyou",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      coverImage: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
      price: null
    }
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-vh-100 d-flex bg-white" style={{ backgroundColor: '#ffffff' }}>
      {/* Left Sidebar */}
      <div className="position-fixed h-100 bg-white border-end" style={{ width: '250px', zIndex: 1030, backgroundColor: '#ffffff' }}>
        <div className="p-4">
          <h1 className="fs-4 fw-bold mb-5">LOGO</h1>
          <Nav className="flex-column gap-1">
            {menuItems.map((item) => (
              <Nav.Link
                key={item.label}
                href={item.href}
                className="d-flex align-items-center gap-3 py-2 text-secondary"
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Nav.Link>
            ))}
          </Nav>
        </div>
        <div className="position-absolute bottom-0 start-0 w-100 p-3">
          <div className="bg-danger-subtle rounded-3 p-2 text-center">
            <span className="text-danger fw-bold">LogOut</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: '250px', marginRight: '320px', flex: 1 }}>
        {/* Header */}
        <div className="border-bottom bg-white sticky-top">
          <div className="d-flex justify-content-between align-items-center p-3">
            <Form className="d-flex align-items-center" style={{ width: '620px' }}>
              <div className="position-relative w-100">
                <Search 
                  size={18} 
                  className="position-absolute top-50 translate-middle-y ms-3 text-secondary" 
                  style={{ opacity: 0.6 }}
                />
                <Form.Control
                  type="search"
                  placeholder="Search here..."
                  className="border-0 rounded-3"
                  style={{ 
                    height: '40px', 
                    fontSize: '0.95rem',
                    paddingLeft: '45px',
                    backgroundColor: '#F5F5F5',
                    opacity: 1
                  }}
                />
              </div>
            </Form>
          </div>
        </div>

        <Container fluid className="py-4">
          <Row className="justify-content-center">
            <Col xs={12} style={{ maxWidth: '600px' }}>
              {posts.map((post, index) => (
                <Card key={index} className="mb-4 border-0">
                  <div className="p-3 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-3">
                      <img 
                        src={post.userImage} 
                        alt={post.username} 
                        className="rounded-circle" 
                        style={{ width: '40px', height: '40px', objectFit: 'cover' }} 
                      />
                      <div>
                        <div className="fw-medium">{post.username}</div>
                        <small className="text-secondary">{post.description}</small>
                      </div>
                    </div>
                    <Button variant="link" className="text-dark p-0">
                      <MoreVertical size={20} />
                    </Button>
                  </div>
                  <div className="position-relative">
                    <Card.Img 
                      src={post.artImage} 
                      alt="Artwork" 
                      style={{ width: '100%', objectFit: 'cover' }} 
                    />
                    <div className="position-absolute bottom-0 start-0 m-3">
                      <span className="badge bg-danger rounded-pill px-3 py-2" style={{ fontSize: '1rem' }}>
                        ${post.price}
                      </span>
                    </div>
                  </div>
                  <Card.Footer className="bg-white border-0 p-3">
                    <div className="d-flex align-items-center gap-4">
                      <Button variant="link" className="text-dark p-0">
                        <Heart size={20} className="me-2" />
                        {post.likes}
                      </Button>
                      <Button variant="link" className="text-dark p-0">
                        <MessageSquare size={20} className="me-2" />
                        {post.comments}
                      </Button>
                      <Button variant="link" className="text-dark p-0">
                        <Share size={20} className="me-2" />
                        {post.shares}
                      </Button>
                    </div>
                  </Card.Footer>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </div>

      {/* Right Sidebar */}
      <div className="position-fixed end-0 top-0 h-100 bg-white border-start overflow-y-auto" style={{ width: '320px', backgroundColor: '#ffffff' }}>
        <div className="p-4">
          {/* Become a Seller Button */}
          <Button
            variant="success"
            className="w-100 mb-4 rounded-4 border-0"
            style={{ 
              backgroundColor: '#66B2A5',
              padding: '12px',
              fontSize: '0.95rem'
            }}
          >
            Become a Seller
          </Button>

          {/* Tabs */}
          <div className="d-flex mb-4">
            <Button
              variant="link"
              className={`text-decoration-none p-0 me-4 ${activeTab === 'artists' ? 'text-dark fw-semibold' : 'text-secondary'}`}
              onClick={() => setActiveTab('artists')}
              style={{ fontSize: '0.95rem' }}
            >
              Artists
            </Button>
            <Button
              variant="link"
              className={`text-decoration-none p-0 ${activeTab === 'photographers' ? 'text-dark fw-semibold' : 'text-secondary'}`}
              onClick={() => setActiveTab('photographers')}
              style={{ fontSize: '0.95rem' }}
            >
              Photographers
            </Button>
          </div>

          {/* Artist Cards */}
          <div className="d-flex flex-column gap-3 mb-4">
            {artists.map((artist) => (
              <div 
                key={artist.id} 
                className="position-relative rounded-4 overflow-hidden"
                style={{ height: '130px' }}
              >
                {/* Cover Image */}
                <img 
                  src={artist.coverImage} 
                  alt={artist.name} 
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
                
                {/* Overlay Content */}
                <div className="position-absolute bottom-0 start-0 w-100 p-3" 
                  style={{ 
                    background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))',
                    borderBottomLeftRadius: '16px',
                    borderBottomRightRadius: '16px'
                  }}>
                  <div className="d-flex align-items-center">
                    <img 
                      src={artist.image}
                      alt={artist.name}
                      className="rounded-circle"
                      style={{ width: '32px', height: '32px', objectFit: 'cover' }}
                    />
                    <div className="text-white ms-2 flex-grow-1">
                      <div className="fw-semibold" style={{ fontSize: '0.95rem' }}>{artist.name}</div>
                      <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>{artist.username}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Links */}
          <div className="d-flex justify-content-center gap-4" style={{ fontSize: '0.85rem' }}>
            <a href="#" className="text-secondary text-decoration-none">Privacy</a>
            <a href="#" className="text-secondary text-decoration-none">Terms of Service</a>
            <a href="#" className="text-secondary text-decoration-none">Cookie Notice</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
