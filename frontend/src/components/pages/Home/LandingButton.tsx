interface LandingButtonProps {
  text: string;
  type: 'large' | 'small';
}

export default function LandingButton(props: LandingButtonProps) {
  return (
<div>
    {props.type === 'large' && (
      <button className="bg-[var(--orange-color)] text-white font-bold ph-40 rounded-3xl hover:bg-[var(--primary-color)] transition-colors cursor-pointer">
        {props.text}
      </button>
    )}
    {props.type === 'small' && (
      <button className="bg-[var(--orange-color)] text-white font-bold py-2 px-4 rounded-lg hover:bg-[var(--primary-color)] transition-colors cursor-pointer">
        {props.text}
      </button>
    )}
</div>
  );
}