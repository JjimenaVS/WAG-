interface LandingButtonProps {
  text: string;
  type: 'large' | 'small';
}

//px para paddin horizontal, py para padding vertical

export default function LandingButton(props: LandingButtonProps) {
  return (
<div>
    {props.type === 'large' && (
      <button className="bg-[var(--orange-color)] text-[var(--primary-color)] px-20 py-2 mt-5 font-bold rounded-3xl hover:bg-[var(--primary-color)] transition-colors cursor-pointer hover:text-[var(--dark-text)]">
        {props.text}
      </button>
    )}
    {props.type === 'small' && (
      <button className="bg-[var(--orange-color)] text-[var(--primary-color)] font-bold py-2 px-4 rounded-lg hover:bg-[var(--primary-color)] transition-colors cursor-pointer hover:text-[var(--dark-text)]">
        {props.text}
      </button>
    )}
</div>
  );
}