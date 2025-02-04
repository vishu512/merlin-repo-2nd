export const Discover = () => {
  const projects = [
    {
      name: "CryptoPunks",
      image: "https://via.placeholder.com/150",
      xp: 50,
      neftCoins: 10
    },
    {
      name: "Bored Apes",
      image: "https://via.placeholder.com/150",
      xp: 100,
      neftCoins: 20
    }
  ];

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Discover Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-dark1 p-4 rounded-lg">
            <img src={project.image} alt={project.name} className="w-full h-32 object-cover rounded-lg" />
            <h3 className="text-lg font-bold mt-2">{project.name}</h3>
            <p className="text-accent">+{project.xp} XP</p>
            <p className="text-accent">+{project.neftCoins} Neft Coins</p>
          </div>
        ))}
      </div>
    </div>
  );
};
