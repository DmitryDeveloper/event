<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventRequest;
use App\Http\Services\EventService;
use Illuminate\Http\JsonResponse;

class EventController extends Controller
{
    protected $eventService;

    public function __construct(EventService $eventService)
    {
        $this->eventService = $eventService;
    }

    /**
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $events = $this->eventService->findAll();

        return response()->json(['data' => $events], 200);
    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function show(int $id): JsonResponse
    {
        $event = $this->eventService->findById($id);

        return response()->json(['data' => $event], 200);

    }

    /**
     * @param EventRequest $request
     * @return JsonResponse
     */
    public function store(EventRequest $request): JsonResponse
    {
        $attributes = $request->all();
        $event = $this->eventService->create($attributes);

        return response()->json(['data' => $event], 200);
    }

    /**
     * @param EventRequest $request
     * @param int $id
     * @return JsonResponse
     */
    public function update(EventRequest $request, int $id)
    {
        $attributes = $request->all();
        $event = $this->eventService->update($attributes, $id);

        return response()->json(['data' => $event], 200);
    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function delete(int $id)
    {
        $event = $this->eventService->delete($id);

        return response()->json(['data' => $event], 200);
    }
}
