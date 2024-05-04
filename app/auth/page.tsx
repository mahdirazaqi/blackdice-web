export default function Auth() {
  return (
    <>
      <form className="bg-gray-100 w-full max-w-96 flex flex-col mx-auto p-3 gap-4 rounded-md">
        <h3 className="text-lg font-bold mb-3">ورود به حساب کاربری</h3>

        <label htmlFor="phone_number" className="text-xs -mb-2">
          شماره موبایل
        </label>

        <input
          type="text"
          id="phone_number"
          className="p-3 rounded-md"
          placeholder="شماره موبایل خود را اینجا وارد کنید"
        />

        <button className="bg-primary p-3 rounded-md text-white">ورود</button>
      </form>
    </>
  );
}
