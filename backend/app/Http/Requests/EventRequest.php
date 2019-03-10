<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EventRequest extends FormRequest
{
    /**
     *@return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * @return array
     */
    public function rules()
    {
        $rules = [];

        switch ($this->method()) {
            case 'GET':
                break;
            case 'DELETE':
                break;
            case 'POST':
                $rules = [
                    'title' => 'bail|required|string|max:255',
                    'description' => 'bail|required|string',
                    'date_start' => 'bail|date|required',
                    'date_end' => 'bail|date|required',
                    'user_id' => 'bail|integer|required',
                ];
                break;
            case 'PUT':
                $rules = [
                    'title' => 'bail|string|max:255',
                    'description' => 'string',
                    'date_start' => 'bail|date',
                    'date_end' => 'bail|date',
                ];
                break;
        }
        return $rules;
    }
}