import './App.css'
import SeuNome from './components/SeuNome'
import Saudacao from './components/Saudacao'
import { useState, useEffect } from 'react'

// Componente de chuva Matrix
function MatrixRain() {
  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0F0';
      ctx.font = fontSize + 'px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    
    const interval = setInterval(draw, 33);
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <canvas id="matrix-canvas" />;
}

function App() {
  const [nome, setNome] = useState("");
  
  return (
    <>
      <MatrixRain />
      <div className='App'>
        <div className="matrix-container">
          <h1>&lt; STATE LIFT /&gt;</h1>
          
          <SeuNome setNome={setNome} />
          <Saudacao nome={nome} />

          {nome && (
            <div className="nome-display">
              <p>
                <span className="prompt-symbol">&gt;</span> Nome detectado:{' '}
                <span className="highlight-name">{nome}</span>
              </p>
              <p className="comment-text">
                // Conexão estabelecida com sucesso
              </p>
            </div>
          )}

          <p className="status-text">
            [ SISTEMA ATIVO - AGUARDANDO INPUT ]
          </p>
        </div>
      </div>
    </>
  )
}

export default App