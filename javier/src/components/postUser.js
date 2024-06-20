export async function postUser( inf ) {
    
    try {
        const response = await fetch('http://localhost:3000/api/task', {
  
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inf)
        });
        response
    }catch(error) {
      console.log(error);
    }
}