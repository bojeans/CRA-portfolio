const IconWithTooltip = ({ Icon, label, className = "" }) => {
  return (
    <li className="mx-2 relative">
      <div className="inline-block group">
        <Icon className={className} />
        <span
          className="pointer-events-none absolute top-full mt-2 left-1/2 -translate-x-1/2
          whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white
          opacity-0 group-hover:opacity-100 transition
          z-50"
        >
          {label}
        </span>
      </div>
    </li>
  );
};

export default IconWithTooltip;
