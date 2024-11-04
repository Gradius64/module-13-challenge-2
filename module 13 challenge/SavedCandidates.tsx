

 
    
    
  
  




const saveCandidate = () => {
  const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
  
  
  localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
  

  
      // Fetch candidates from the API when the component mounts
      const fetchCandidates = async () => {
          const response = await fetch(`https://api.github.com/users?since=${Math.floor(Math.random() * 1000)}`);
          const data = await response.json();
          const formattedData = data.map((item: any) => ({
              name: item.name,
              username: item.login,
              location: item.location,
              avatar: item.avatar_url,
              email: item.email,
              html_url: item.html_url,
              company: item.company,
          }));
      }
    }
  
