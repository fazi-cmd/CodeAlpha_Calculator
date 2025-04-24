function Container({ children }) {
    return (
      <div style={{
        background: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        padding: '20px',
        width: '230px', 
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        {children}
      </div>
    );
  }
  export default Container;
  