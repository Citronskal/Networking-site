const meetingSpots = [
  {
    id: 1,
    name: "New York",
    image:
      "https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "New York City",
  },
  {
    id: 2,
    name: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1592500008427-01ba8bb1cb0c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Tokyo",
  },
  {
    id: 3,
    name: "Berlin",
    image:
      "https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Berlin",
  },
  {
    id: 4,
    name: "Taipei",
    image:
      "https://plus.unsplash.com/premium_photo-1661955975506-04d3812be312?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Taipei City",
  },
];

export const MeetingSpots = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center my-8">
        Popular Meeting Spots
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {meetingSpots.map((spot) => (
          <div
            key={spot.id}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <img
              className="w-full h-48 object-cover"
              src={spot.image}
              alt={spot.name}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{spot.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
