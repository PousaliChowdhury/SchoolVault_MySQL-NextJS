export default function SchoolCard({ school }) {
  return (
    <div className="school-card">
      <img
        src={`/schoolImages/${school.image}`}
        alt={school.name}
      />
      <div className="school-info">
        <h3>{school.name}</h3>
        <p><strong>Address:</strong> {school.address}</p>
        <p><strong>City:</strong> {school.city}</p>
        <p><strong>State:</strong> {school.state}</p>
        <p><strong>Country:</strong> {school.country}</p>
      </div>
    </div>
  );
}
