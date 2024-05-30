import { useState } from 'react';

export const Activity: React.FC = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>Final activity</h1>
      <p className='text-center mb-20 font-mono'>
        code: /src/pages/6-activity.tsx
      </p>
      <Race />
    </div>
  );
};

function Race() {
  // create two state variables to track the progress of each player, and one to track whose turn it is
  // initial values:
  const [playerOneProgress, setPlayerOneProgress] = useState(0);
  const [playerTwoProgress, setPlayerTwoProgress] = useState(0);
  const [turn, setTurn] = useState('Player One');

  function handlePlayerMove() {
    // This function should:
    // - add the random distance to the current player's progress
    // - Switch the turn to the other player
    const randomDistance = Math.floor(Math.random() * 10);
    if (turn === 'Player One') {
      setPlayerOneProgress(playerOneProgress + randomDistance);
      setTurn('Player Two');
    } else {
      setPlayerTwoProgress(playerTwoProgress + randomDistance);
      setTurn('Player One');
    }
  }

  function resetGame() {
    // This function should reset the game
    setPlayerOneProgress(0);
    setPlayerTwoProgress(0);
    setTurn('Player One');
  }

  const playerHasWon = playerOneProgress >= 100 || playerTwoProgress >= 100;

  return (
    <>
      <div className='flex flex-row justify-center items-start'>
        <div
          className=' border-t-2 border-white'
          style={{
            paddingTop: `${Math.max(0, Math.floor(100 - playerOneProgress))}px`,
          }}
        >
          <PlayerCard label='Player One' />
        </div>
        <div
          className=' border-t-2 border-white'
          style={{
            paddingTop: `${Math.max(0, Math.floor(100 - playerTwoProgress))}px`,
          }}
        >
          <PlayerCard label='Player Two' />
        </div>
        <div className='flex flex-col items-center gap-6 ml-6'>
          {playerHasWon ? (
            <>
              <p>
                {playerOneProgress >= 100 ? 'Player One' : 'Player Two'} wins!
              </p>
            </>
          ) : (
            <>
              <p>{turn}'s turn</p>
              <Button onClick={handlePlayerMove}>Move</Button>
            </>
          )}
        </div>
      </div>
      {playerHasWon && (
        <div className='flex justify-center mt-20'>
          <Button onClick={resetGame}>Reset</Button>
        </div>
      )}
    </>
  );
}

function PlayerCard({ label }: { label: string }) {
  // display "Player 1" and "Player 2" on the component instances
  return (
    <div className='bg-green-700 text-white font-semibold px-2 py-8 rounded-md min-w-32 mx-4'>
      {label}
    </div>
  );
}

function Button({
  onClick,
  children,
}: {
  onClick?: () => void;
  children?: React.ReactNode;
}) {
  return (
    <button
      className='bg-white text-slate-900 font-bold px-4 py-2 rounded'
      onClick={onClick}
    >
      {children}
    </button>
  );
}
