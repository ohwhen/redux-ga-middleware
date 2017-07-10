export default function({dispatch, getState}) {
    return next => action => {

        if(action.analytics) {

          window.ga("send", "event", action.analytics.eventCategory || "defaultCategory", "click", action.analytics.eventLabel || action.type );

          if(action.analytics.pageview) {
              window.ga("send", "pageview", `${window.location.protocol}//${window.location.host}/${action.analytics.pageview}`);
          }
        }

        return next(action);
    }
}
