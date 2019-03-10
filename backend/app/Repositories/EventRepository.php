<?php

namespace App\Http\Repositories;

use Illuminate\Database\Eloquent\Collection;
use App\Models\Event;

class EventRepository
{
    protected $model;

    public function __construct(Event $model)
    {
        $this->model = $model;
    }

    /**
     * @return Collection
     */
    public function findAll(): Collection
    {
        return $this->model->all();
    }

    /**
     * @param $id
     * @return Event
     */
    public function findById($id): Event
    {
        return $this->model->findOrFail($id);
    }

    /**
     * @param array $attributes
     * @return Event
     */
    public function create(array $attributes): Event
    {
        return $this->model->create($attributes);
    }

    /**
     * @param $attributes
     * @param int $id
     * @return mixed
     */
    public function update($attributes, int $id): Event
    {
        $event = $this->model->findOrFail($id);
        $event->update($attributes);
        $event->users()->detach();
        if ($attributes['users']) {
            $event->users()->attach($attributes['users']);
        }
        return $event;
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function delete(int $id)
    {
        $event = $this->model->findOrFail($id);
        $event->users()->detach();
        $this->model->findOrFail($id)->delete();
        return $event;
    }
}
