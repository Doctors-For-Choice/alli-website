export const DonationWidget = () => {
	const u="https://spenden.twingle.de/embed/doctors-for-choice-germany-e-v/spende/tw5f107dd43e6cc/widget";
	const id = '_' + Math.random().toString(36).substr(2, 9);
	const d=document;
	const	g=d.createElement('script');
	const	s=d.getElementsByTagName('script')[0];
	const	t=d.createElement('div');
	t.id = 'twingle-public-embed-' + id;
	// document.currentScript.after(t);
	g.type='text/javascript';
	g.async=true;
	g.defer=true;
	g.src=u+'/'+id;
	s.parentNode.insertBefore(g,s);

	return (
		<div id={"twingle-public-embed-" + id} typeof="text/javascript" src={u+"/"+id}></div>
	)
}
