export function PollProgress({ current, total }: { current: number; total: number }) {
  const percent = Math.round((current / total) * 100);

  return (
    <div>
      <p className="text-sm font-semibold text-teal-dark">
        Question {current} of {total}
      </p>
      <div
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Question ${current} of ${total}`}
        className="mt-2 h-2 w-full overflow-hidden rounded-full bg-teal-light"
      >
        <div
          className="h-full rounded-full bg-teal transition-[width] duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
