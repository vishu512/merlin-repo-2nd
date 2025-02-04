export const Profile = ({ user }) => {
  return (
    <div className="p-6 text-primary">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-20 h-20 bg-gray1 rounded-full"></div>
        <div>
          <h2 className="text-xl font-bold">{user.username}</h2>
          <p>Level {user.level}</p>
          <p className="text-accent">Neft-{user.neftCoins}</p>
        </div>
      </div>

      <div className="bg-dark1 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-bold mb-4">Completed Quests</h3>
        {user.quests.map((quest, index) => (
          <div key={index} className="flex justify-between mb-2">
            <span>{quest.name}</span>
            <span className="text-accent">+{quest.xp} XP</span>
          </div>
        ))}
      </div>

      <div className="bg-dark1 p-4 rounded-lg">
        <h3 className="text-lg font-bold mb-4">Your Collectibles</h3>
        <div className="grid grid-cols-2 gap-4">
          {user.collectibles.map((item, index) => (
            <div key={index} className="text-center">
              <img src={item.image} alt={item.name} className="w-20 h-20 mx-auto" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
