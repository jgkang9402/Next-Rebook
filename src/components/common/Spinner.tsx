const Spinner = ({ spinnerBoxHeight }: { spinnerBoxHeight?: string }) => {
  return (
    <div
      className={`flex items-center justify-center my-auto ${spinnerBoxHeight}`}
    >
      <div className="animate-spin rounded-full h-32 w-32 border-t-8 border-b-8 border-primary" />
    </div>
  );
};

export default Spinner;
