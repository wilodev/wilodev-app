/**
 * @fileOverview ITranslationService Interface
 * @description Defines the standard interface for a translation service within the application.
 *              This interface abstracts the core functionalities for translation management,
 *              allowing for easy swapping or upgrading of the underlying translation mechanism.
 *              It provides methods for translating text, changing language, and checking the readiness
 *              of translation resources.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

export interface ITranslationService {
  /**
   * Translates a given key into the current language.
   * This method fetches the translation for the specified key from the current language's resource bundle.
   * @param key The key for the text that needs to be translated.
   * @returns The translated string corresponding to the given key.
   */
  translate(key: string): string;

  /**
   * Changes the current language of the application.
   * This method updates the application's current language and reloads the translation resources accordingly.
   * @param language The new language to set, typically an ISO language code (e.g., 'en', 'es').
   * @returns A Promise that resolves when the language change is complete.
   */
  changeLanguage(language: string): Promise<void>;

  /**
   * Checks if the translation resources are ready for use.
   * This method is typically used to verify that the translation resources have been loaded and are ready to be accessed.
   * @returns A boolean indicating whether the translations are ready.
   */
  isReady(): boolean;
}
