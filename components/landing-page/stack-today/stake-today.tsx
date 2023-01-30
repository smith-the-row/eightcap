import Link from "next/link";

const StakeToday = () => {
  return (
    <section className="my-12">
      <div className="w-[90%] mx-auto">
        <div className="md:grid grid-cols-2 gap-4">
          <div className="my-2 md:my-0 justify-items-center">
            <h4 className="text-xl md:text-4xl font-main font-bold capitalize mb-2 text-teal-500">
              Stake Crypto with volume exchange
            </h4>
            <p className="capitalize font-main leading-relaxed my-8 text-neutral-300">
              also seize and maximize the opportunities and potentials of crypto
              today by earning passively through staking.
            </p>
            <Link
              href="/auth/sign-up"
              className="rounded px-6 py-3 capitalize bg-teal-500 text-card font-main font-medium"
            >
              Start Staking today
            </Link>
          </div>
          <div className="w-[70%] p-3">
            <img src="/delivers.svg" alt="wallet" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakeToday;