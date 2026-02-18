export const fetchUsers = async () => {
  try {
    const response = await fetch('http://localhost:3001/users');
    if (!response.ok) throw new Error('Failed to fetch users');
    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};
