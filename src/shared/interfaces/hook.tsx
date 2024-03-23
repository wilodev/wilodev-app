/**
 * @fileOverview Hook Output Interface
 * @description This file defines the structure for the output of custom hooks.
 *              It includes the state and actions associated with the hook.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

/**
 * Interface for Hook Output
 * @template TState The type of the state object returned by the hook.
 * @template TActions The type of the actions object returned by the hook.
 * @field state The current state of the hook.
 * @field actions The set of actions that can be performed on the state.
 */
export interface HookOutput<TState = object, TActions = object> {
  state: TState;
  actions: TActions;
}
