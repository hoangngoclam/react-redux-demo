import ToggleCompleted from './ToggleCompleted';

interface TodoFormAddProps {
  inputTitle: string;
  setInputTitle: (text: string) => void;
  inputChecked: boolean;
  setInputChecked: (check: boolean) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const TodoFormAdd = ({
  inputTitle,
  setInputTitle,
  inputChecked,
  setInputChecked,
  handleSubmit,
}: TodoFormAddProps) => {
  return (
    <form
      className="mt-6 mb-4 flex items-center rounded-md bg-white px-4 py-3 dark:bg-dark-blue lg:mt-12 lg:mb-6 lg:px-6 lg:py-4"
      onSubmit={handleSubmit}
    >
      <ToggleCompleted
        isCompleted={inputChecked}
        onClick={(e) => setInputChecked(e.currentTarget.checked)}
      />
      <input
        className="mt-1 ml-4 flex-1 text-sm outline-none dark:bg-dark-blue dark:text-gray-300 md:text-base"
        placeholder="Create a new todos..."
        required
        pattern="[^\s]+(\s+[^\s]+)*"
        value={inputTitle}
        onChange={(e) => setInputTitle(e.currentTarget.value)}
      />
    </form>
  );
};
