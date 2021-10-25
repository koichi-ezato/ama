import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class PageTitleService {
  /**
   * データ変更通知オブジェクト
   *
   * @private
   * @memberOf PageTitleService
   */
  private sharedPageTitle = new Subject<string>();

  /**
   * コンポーネント間でページタイトルを共有するためのプロパティ
   *
   * @memberOf PageTitleService
   */
  public sharedPageTitle$ = this.sharedPageTitle.asObservable();

  constructor() {}

  /**
   * データ更新イベント
   *
   * @param {string} updated 更新データ
   * @memberOf PageTitleService
   */
  public onNotifySharedPageTitleChanged(updated: string) {
    this.sharedPageTitle.next(updated);
  }
}
