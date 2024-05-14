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
  // create two state variables to track the progress of each player, and one to track the current turn
  // initial values:
  const playerOneProgress = 0;
  const playerTwoProgress = 0;
  const turn = 'Player One';

  function handlePlayerMove() {
    // This function should:
    // - add a random distance between 0 and 10 to the current player's progress (hint: Math.floor(Math.random() * 10))
    // - Switch the turn to the other player
  }

  function resetGame() {
    // This function should reset the game
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
          <PlayerCard />
        </div>
        <div
          className=' border-t-2 border-white'
          style={{
            paddingTop: `${Math.max(0, Math.floor(100 - playerTwoProgress))}px`,
          }}
        >
          <PlayerCard />
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
              <Button>Move</Button>
            </>
          )}
        </div>
      </div>
      {playerHasWon && (
        <div className='flex justify-center mt-20'>
          <Button>Reset</Button>
        </div>
      )}
    </>
  );
}

function PlayerCard() {
  // display "Player 1" and "Player 2" on the component instances
  return (
    <div className='bg-green-700 text-white font-semibold px-2 py-8 rounded-md min-w-32 mx-4'>
      {/* label here */}
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
