import { action, DialUpEvent, SingletonAction } from "@elgato/streamdeck";

@action({ UUID: "com.bardunbar.dial-pager.scroll-pages" })
export class ScrollPages extends SingletonAction<CounterSettings> {
	/**
	 * Occurs when the user releases a dial.
	 */
	override onDialUp(ev: DialUpEvent<CounterSettings>): Promise<void> | void {
        ev.action.setFeedback({
            title: "Half way there",
			indicator: {
				value: 50,
			},
		});
	}
}

/**
 * Settings for {@link ScrollPages}.
 */
type CounterSettings = {
	count?: number;
	incrementBy?: number;
};