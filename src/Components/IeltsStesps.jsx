const IeltsSteps = () => {
  const steps = [
    {
      id: 1,
      left: "Ro’yxatdan o’ting",
      right: "",
    },
    {
      id: 2,
      left: "",
      right: "Darajangizni bilish uchun testdan o’ting",
    },
    {
      id: 3,
      left: "2 oylik IELTS CD guruhimizga qo’shiling",
      right: "",
    },
    {
      id: 4,
      left: "",
      right: "Mock testlaridan yaxshi natijalarga erishing",
    },
    {
      id: 5,
      left: "Tabriklaymiz siz IELTS 7+ga erishdingiz 🎉",
      right: "",
    },
  ];

  return (
    <div className="bg-[#003399] text-white px-4 py-10 md:py-16 text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-10">
        Qanday qilib 2 oyda IELTS dan 7+ olasiz ?
      </h2>

      <div className="relative flex flex-col items-center max-w-5xl mx-auto">
        <div className="absolute w-1 bg-white h-full left-1/2 transform -translate-x-1/2 z-0" />

        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col md:flex-row w-full justify-between items-center my-8 relative z-10">
            {/* Chap matn */}
            <div className="w-full md:w-2/5 text-right px-2 hidden md:block">
              {step.left && (
                <p className="text-base md:text-lg leading-snug">{step.left}</p>
              )}
            </div>

            {/* Raqam */}
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mx-4 z-10 text-base md:text-lg">
              {step.id}
            </div>

            {/* O'ng matn */}
            <div className="w-full md:w-2/5 text-left px-2 hidden md:block">
              {step.right && (
                <p className="text-base md:text-lg leading-snug">
                  {step.right}
                </p>
              )}
            </div>

            {/* Mobilda faqat bitta matn pastda ko‘rinadi */}
            <div className="md:hidden w-full mt-4 text-center text-sm sm:text-base">
              {step.left || step.right}
            </div>
          </div>
        ))}
      </div>

      <button className="mt-10 bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition text-sm sm:text-base">
        Ariza topshirish
      </button>
    </div>
  );
};

export default IeltsSteps;
