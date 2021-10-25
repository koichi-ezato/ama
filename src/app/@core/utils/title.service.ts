import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class TitleService {
  /**
   * データ変更通知オブジェクト
   *
   * @private
   * @memberOf TitleService
   */
  private sharedTitle = new Subject<string>();

  /**
   * コンポーネント間でタイトルを共有するためのプロパティ
   *
   * @memberOf TitleService
   */
  public sharedTitle$ = this.sharedTitle.asObservable();

  constructor() {}

  /**
   * データ更新イベント
   *
   * @param {string} updated 更新データ
   * @memberOf TitleService
   */
  public onNotifySharedTitleChanged(updated: string) {
    this.sharedTitle.next(updated);
  }
}
