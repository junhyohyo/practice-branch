import React, { useState } from 'react';

function Home() {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`입력된 URL: ${url}`);
    // 나중에 실제 URL 처리 로직 추가할 자리
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        🎌 유튜브 일본어 영상 자동번역 서비스
      </h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="🔗 유튜브 영상 URL을 붙여넣으세요"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit" style={styles.button}>
          스크립트 생성 🚀
        </button>
      </form>

      <div style={styles.instructions}>
        <h2 style={{ marginBottom: '10px' }}>📌 사용 방법</h2>
        <ul>
          <li>유튜브 영상 URL을 위 입력창에 붙여넣습니다.</li>
          <li>"스크립트 생성" 버튼을 누르면 자동 번역됩니다.</li>
          <li>영상과 스크립트를 동시에 확인하세요.</li>
        </ul>
      </div>
    </div>
  );
}

// CSS 스타일링 (인라인 스타일)
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f7fa',
    fontFamily: 'sans-serif'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#333'
  },
  form: {
    width: '100%',
    maxWidth: '500px',
    padding: '20px',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    marginBottom: '20px'
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '1rem'
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem'
  },
  instructions: {
    width: '100%',
    maxWidth: '500px',
    color: '#555'
  }
};

export default Home;
