'use client';
import { Switch } from '@headlessui/react';
import { useState } from 'react';

export default function ToggleSwitch() {
    const [enabled, setEnabled] = useState(false);

    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-gray-300' : 'bg-blue-500'}
        relative inline-flex h-6 w-11 items-center rounded-full`}
        >
      <span
          className={`${enabled ? '-translate-x-6' : 'translate-x-0'}
          inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
        </Switch>
    );
}
