import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function AddSchool() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('address', data.address);
    formData.append('city', data.city);
    formData.append('state', data.state);
    formData.append('country', data.country);
    formData.append('contact', data.contact);
    formData.append('email_id', data.email_id);
    formData.append('image', data.image[0]); 

    try {
      await axios.post('/api/newSchool', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('School added successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to add school.');
    }
  };


  return (
    <div className="container">
      <h1>Add School</h1>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <input {...register('name', { required: true })} placeholder="Name" />
        {errors.name && <span>Name is required</span>}

        <input {...register('address', { required: true })} placeholder="Address" />
        {errors.address && <span>Address is required</span>}

        <input {...register('city', { required: true })} placeholder="City" />
        {errors.city && <span>City is required</span>}

        <input {...register('state', { required: true })} placeholder="State" />
        {errors.state && <span>State is required</span>}
        
        <input {...register('country', { required: true })} placeholder="Country" />
        {errors.state && <span>State is required</span>}

        <input {...register('contact', { required: true, pattern: /^[0-9]+$/ })} placeholder="Contact" />
        {errors.contact && <span>Contact must be a number</span>}

        <input {...register('email_id', { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" />
        {errors.email_id && <span>Invalid email</span>}

        <input type="file" {...register('image', { required: true })} />
        {errors.image && <span>Image is required</span>}

        <button type="submit">Add School</button>
      </form>
    </div>
  );
}
