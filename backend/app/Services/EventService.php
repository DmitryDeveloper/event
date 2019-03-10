<?php


namespace App\Http\Services;

use App\Http\Repositories\EventRepository;
use Illuminate\Database\Eloquent\Collection;

class EventService
{
    protected $eventRepository;

    public function __construct(EventRepository $eventRepository)
    {
        $this->eventRepository = $eventRepository;
    }

    /**
     * @return Collection
     */
    public function findAll(): Collection
    {
        return $this->eventRepository->findAll();
    }

    /**
     * @param int $id
     * @return \App\Models\Event
     */
    public function findById(int $id)
    {
        return $this->eventRepository->findById($id);
    }

    /**
     * @param array $attributes
     * @return \App\Models\Event
     */
    public function create(array $attributes)
    {
        return $this->eventRepository->create($attributes);
    }

    /**
     * @param $attributes
     * @param int $id
     * @return \App\Models\Event|mixed
     */
    public function update($attributes, int $id)
    {
        return $this->eventRepository->update($attributes, $id);
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function delete(int $id)
    {
        return $this->eventRepository->delete($id);
    }
}
