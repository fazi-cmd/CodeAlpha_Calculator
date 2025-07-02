function Button({ onButtonClick }) {
    const values = [
      "C", "1", "2", "*",
      "3", "4", "-", "5", 
      "6", "+", "7", "8", 
      "/", "=", "9", "0", "."
    ];
  
    const getButtonStyle = (item) => {
      const baseStyle = {
        border: 'none',
        borderRadius: '50px',
        padding: '15px 0',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'all 0.2s',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        flex: '1 0 21%',
        margin: '2px'
      };
  
      if (item === 'C') {
        return {
          ...baseStyle,
          background: 'linear-gradient(135deg, #ff5e62, #ff9966)',
          color: 'white'
        };
      }
      if (item === '=') {
        return {
          ...baseStyle,
          background: 'linear-gradient(135deg, #4776E6, #8E54E9)',
          color: 'white'
        };
      }
      if (['+', '-', '*', '/'].includes(item)) {
        return {
          ...baseStyle,
          background: 'rgba(255, 255, 255, 0.3)',
          color: 'white'
        };
      }
      return {
        ...baseStyle,
        background: 'rgba(255, 255, 255, 0.8)',
        color: '#333'
      };
    };
  
    return (
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        justifyContent: 'center'
      }}>
        {values.map((item, index) => (
          <button 
            onClick={() => onButtonClick(item)} 
            key={index} 
            type="button" 
            style={getButtonStyle(item)}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {item}
          </button>
        ))}
      </div>
    );
  }
  
  export default Button;