import FilterRow from './FilterRow';

type Filter = 'all' | 'active' | 'completed';

interface TodoFilterBoxProps {
  activeTodos: Todo[];
  inputFilter: Filter;
  setTodos: (todos: Todo[]) => void;
  handleInputFilter: (event: React.FormEvent<HTMLInputElement>) => void;
}

export const TodoFilterBox = ({
  activeTodos,
  inputFilter,
  setTodos,
  handleInputFilter,
}: TodoFilterBoxProps) => {
  return (
    <li className="relative flex items-center justify-between px-4 py-3 text-xs text-slate-400 sm:text-sm">
      <span>
        {activeTodos.length} item{activeTodos.length > 1 && 's'} left
      </span>

      <div className="absolute left-0 top-14 flex w-full justify-center gap-4 rounded-md bg-white py-3 font-semibold capitalize dark:bg-dark-blue sm:static sm:w-auto sm:p-0">
        <FilterRow checkedValue={inputFilter} onChange={handleInputFilter} />
      </div>

      <button
        className="hover:text-black dark:hover:text-white"
        onClick={() => setTodos(activeTodos)}
      >
        Clear Completed
      </button>
    </li>
  );
};
