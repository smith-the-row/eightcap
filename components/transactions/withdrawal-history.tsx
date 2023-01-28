import { useTransactions } from "../../hooks/useTransactions";
import { formatCurrency } from "../../utils/formatCurrency";

type withdrawal = {
  withdrawals: [] | undefined | any;
  error: String | unknown | any;
  loading: Boolean;
};

const WithdrawalHistory = () => {
  const {
    transactions: withdrawals,
    error,
    loading,
  } = useTransactions("/withdraw");

  return (
    <div className="mb-6">
      <div>
        <h3 className="font-sec font-bold text-paper py-2 mx-2 text-xl hover:underline cursor-pointer">
          Withdrawal History
        </h3>
      </div>
      <div>
        {withdrawals.length <= 0 ? (
          <div className="font-semibold flex items-center justify-center my-8 text-base text-gray_bg">
            Opps Nothing here
          </div>
        ) : (
          <WithdrawalTable
            withdrawals={withdrawals}
            error={error}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
};

const WithdrawalTable = ({ withdrawals, loading }: withdrawal) => {
  return (
    <div className="mx-2">
      {/* grid wrapper container */}
      <div className="grid grid-cols-4 md:grid-cols-5 gap-2 mt-4 bg-card py-3 rounded px-2 justify-items-center">
        {/* grid child */}
        <div className="font-sec font-bold justify-self-start">Coin</div>
        {/* grid child */}
        <div className="font-sec font-bold justify-self-start md:block hidden">
          Remarks
        </div>
        {/* grid child */}
        <div className="font-sec font-bold justify-self-start">Amount</div>
        {/* grid child */}
        <div className="font-sec font-bold justify-self-start">Status</div>
        {/* grid child */}
        <div className="font-sec font-bold justify-self-start">Date</div>
      </div>
      {/* withdrawal details */}

      <div className="grid  grid-cols-4 md:grid-cols-5 justify-items-center px-2 py-2 bg-card/20 ">
        {withdrawals.map((withdrawal: any) => (
          <>
            {
              <>
                <div className="p-1 justify-self-start font-bold capitalize font-sec">
                  {withdrawal.coin}
                </div>
                <div className="p-1 font-semibold font-sec justify-self-start hidden md:block">
                  {withdrawal.remarks}
                </div>
                <div className="p-1 font-semibold font-sec justify-self-start">
                  {formatCurrency(withdrawal.amount)}
                </div>
                <>
                  {withdrawal.approved ? (
                    <div className="font-sec justify-self-start py-1 text-success">
                      success
                    </div>
                  ) : (
                    <div className="font-sec text-danger py-1 justify-self-start">
                      pending
                    </div>
                  )}
                </>
                <div className="justify-self-start font-sec font-semibold p-1">
                  {withdrawal.date}
                </div>
              </>
            }
          </>
        ))}
      </div>
    </div>
  );
};

export default WithdrawalHistory;
