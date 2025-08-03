// TimePicker.jsx
import { Listbox } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));
const periods = ['AM', 'PM'];

export default function TimePicker({
  selectedHour,
  setSelectedHour,
  selectedMinute,
  setSelectedMinute,
  selectedPeriod,
  setSelectedPeriod,
}) {
  return (
    <div className="flex space-x-2 items-center">
      {/* Hour Picker */}
      <TimeDropdown
        value={selectedHour}
        onChange={setSelectedHour}
        options={hours}
        label="Hour"
      />

      <span className="text-xl font-medium text-gray-800 dark:text-white">:</span>

      {/* Minute Picker */}
      <TimeDropdown
        value={selectedMinute}
        onChange={setSelectedMinute}
        options={minutes}
        label="Minute"
      />

      {/* AM/PM Picker */}
      <TimeDropdown
        value={selectedPeriod}
        onChange={setSelectedPeriod}
        options={periods}
        label="AM/PM"
      />
    </div>
  );
}

function TimeDropdown({ value, onChange, options, label }) {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative w-20">
        <Listbox.Button className="w-full rounded-md border bg-gray-300 dark:bg-gray-700 py-2 pl-3 pr-10 text-left text-gray-800 dark:text-white focus:outline-none focus:ring">
          {value}
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
          </span>
        </Listbox.Button>
        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-300 dark:bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {options.map((option, idx) => (
            <Listbox.Option
              key={idx}
              className={({ active }) =>
                `relative cursor-pointer select-none py-2 pl-4 pr-4 ${
                  active ? 'bg-gray-200 dark:bg-gray-600 text-black dark:text-white' : 'text-gray-900 dark:text-white'
                }`
              }
              value={option}
            >
              {option}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
