function App() {
  return (
    <div className="w-full max-w-screen h-full sm:pt-5 pt-0 bg-[#DDEBF5] max-h-screen select-none">
      <div className="flex flex-col w-full max-w-screen-md mx-auto">
        <div className="bg-white sm:p-10 p-6">
          <h3 className="sm:text-2xl text-xl text-[#2AB3B1] font-bold mb-6">Join our community</h3>
          <h4 className="smtext-lg text-[15px] font-bold text-[#C0DF33] mb-3">30-day, hassle-free money back guarantee</h4>
          <p className="sm:text-base text-sm font-normal text-[#9AA7BE]">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
        </div>
        <div className='flex flex-col sm:flex-row items-center text-white'>
          <div className='w-full sm:max-w-xs bg-[#2AB3B1] sm:h-[320px] h-full sm:p-8 p-6'>
            <h4 className="text-lg font-bold mb-[18px]">Monthly Subscription</h4>
            <h2 className="text-3xl font-bold mb-1 flex items-center gap-3">$29 <span className="text-base font-normal opacity-50">per month</span></h2>
            <p className="text-base font-normal mb-7">Full access for less than $1 a day</p>
            <button className="text-base font-bold w-full bg-[#C0DF33] active:mt-1 active:shadow-none rounded-md py-[15px]">Sign Up</button>
          </div>
          <div className='w-full sm:max-w-xs bg-[#4ABFBD] sm:h-[320px] h-full sm:p-8 p-6'>
            <h3 className="text-lg font-bold mb-4">Why Us</h3>
            <p className="text-sm font-normal opacity-75">Tutorials by industry experts Peer & expert code review Coding exercises Access to our GitHub repos Community forum Flashcard decks New videos every week</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App