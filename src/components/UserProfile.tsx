import React, { useEffect, useState } from 'react';
import { getUserProfile, updateUserProfile } from '../network/userApi';

const UserProfile: React.FC = () => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  useEffect(() => {
    getUserProfile()
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load profile');
        setLoading(false);
      });
  }, []);

  const handleUpdate = async () => {
    try {
      setError('');
      setSuccess('');
      await updateUserProfile(profile);
      setSuccess('Profile updated successfully');
    } catch (err) {
      setError('Update failed');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">User Profile</h2>
      <input
        className="border p-2 w-full mb-2"
        value={profile.name}
        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
      />
      <input
        className="border p-2 w-full mb-2"
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
      />
      <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded">
        Update
      </button>
      {success && <p className="text-green-600 mt-2">{success}</p>}
    </div>
  );
};

export default UserProfile;
