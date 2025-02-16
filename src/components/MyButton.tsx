export interface MyButtonProps {
  text: string;
};

const MyButton: React.FC<MyButtonProps> = ({ text }) => {
  return (
    <button>
      Message from server: {text ? text : 'Loading...'}
    </button>
  );
}

export default MyButton;