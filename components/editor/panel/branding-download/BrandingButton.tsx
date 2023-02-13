import { useState } from 'react'
import { Switch } from '@headlessui/react'

const BrandingButton = () => {
    const [enabled, setEnabled] = useState(false)
    return (
    <div className="flex flex-row gap-2">
        <h6 className="font-bold text-sm">Branding</h6>
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-primary-default' : 'bg-primary-default'}
            relative inline-flex h-[20px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-background-primary focus-visible:ring-opacity-75`}
        >
            <span aria-hidden="true" className={`${enabled ? 'translate-x-7' : 'translate-x-0'}
                pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-background-primary shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
        </Switch>
        </div>
    )
}

export default BrandingButton