import { API_URL, token } from './config';

const deleteTodoRequest = async (todo) => {
  const response = await fetch(`${API_URL}/todos/${todo._id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
};

export default deleteTodoRequest;