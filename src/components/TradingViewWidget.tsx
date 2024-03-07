// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
	const container = useRef();

	useEffect(() => {
		const script = document.createElement('script');
		script.src =
			'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
		script.type = 'text/javascript';
		script.async = true;
		script.innerHTML = `
      {
        "width": "980",
        "height": "610",
        "symbol": "BTC",
        "timezone": "Asia/Kolkata",
        "theme": "light",
        "style": "3",
        "locale": "en",
        "enable_publishing": false,
        "hide_top_toolbar": true,
        "hide_legend": true,
        "range": "1M",
        "save_image": false,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
      }`;

		if (container.current) {
			container.current.appendChild(script);
		}

		// Clean up function to remove the script when component unmounts
		return () => {
			if (container.current && container.current.contains(script)) {
				container.current.removeChild(script);
			}
		};
	}, []);

	return (
		<div
			className='tradingview-widget-container'
			ref={container}
		>
			<div className='tradingview-widget-container__widget'></div>
			<div className='tradingview-widget-copyright'>
				{/* <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a> */}
			</div>
		</div>
	);
}

export default memo(TradingViewWidget);
