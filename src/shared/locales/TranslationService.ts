/**
 * @fileOverview TranslationService
 * @description Provides an implementation of the ITranslationService interface.
 *              This class encapsulates the interaction with the i18next library,
 *              offering a standardized interface for translation functionalities within the application.
 *              It allows for easy management of language changes and fetching of translated strings.
 *              By implementing the ITranslationService interface, it ensures that the translation
 *              mechanism can be easily replaced or updated without major changes to the application.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import { i18n } from 'i18next';

import { ITranslationService } from './ITranslationService';

/**
 * TranslationService class.
 * Implements the ITranslationService interface using the i18next instance.
 */
export class TranslationService implements ITranslationService {
  /**
   * Constructs a new TranslationService instance.
   * @param i18nInstance The i18next instance to be used for translation.
   */
  constructor(private i18nInstance: i18n) {}

  /**
   * Translates the specified key using the current language's translation resources.
   * @param key The key for the text to be translated.
   * @returns The translated string.
   */
  translate(key: string): string {
    return this.i18nInstance.t(key);
  }

  /**
   * Changes the application's current language and updates the translation resources.
   * @param language The new language code to set (e.g., 'en', 'es').
   * @returns A Promise that resolves when the language change has been completed.
   */
  async changeLanguage(language: string): Promise<void> {
    await this.i18nInstance.changeLanguage(language);
  }

  /**
   * Checks whether the i18next instance has been initialized and the translation resources are ready.
   * @returns True if the i18next instance is initialized and ready; otherwise, false.
   */
  isReady(): boolean {
    return this.i18nInstance.isInitialized;
  }
}
