<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class ProjectCard extends Component
{
    public $number;
    public $title;
    public $subtitle;
    public $image;
    public $tags;
    public $icon;
    public $playable;

    public function __construct($number, $title, $subtitle, $image, $tags = [], $icon = null, $playable = true)
    {
        $this->number = $number;
        $this->title = $title;
        $this->subtitle = $subtitle;
        $this->image = $image;
        $this->tags = $tags;
        $this->icon = $icon;
        $this->playable = $playable;

    }

    public function render()
    {
        return view('components.project-card');
    }
}
