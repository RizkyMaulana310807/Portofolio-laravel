<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;


class Alert extends Component
{
    /**
     * Create a new component instance.
    */
    public $type;
    
    public function __construct($type = 'info')
    {
        $this->type = $type;
    }

    public function styles()
    {
        return match ($this->type) {
            'success' => 'bg-green-100 border-green-500 text-green-700',
            'error' => 'bg-red-100 border-red-500 text-red-700',
            'warning' => 'bg-yellow-100 border-yellow-500 text-yellow-700',
            default => 'bg-blue-100 border-blue-500 text-blue-700',
        };
    }
    
    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.alert');
    }
}
