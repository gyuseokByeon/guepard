/*class flash.events.HTTPStatusEvent*/
(function ()
{
	"use strict";
	
	var d = {};
	
	/*private*/
	d/*var*/.m_status/*int*/ = 0;
	
	/*public*/
	d.get_status = function ()/*int*/
	{
		return this.m_status;
		
	};
	
	
	/*public*/
	d.HTTPStatusEvent = function (type/*String*/, bubbles/*Boolean*/, cancelable/*Boolean*/, status/*int*/)
	{
		if (bubbles == undefined) bubbles = false;
		if (cancelable == undefined) cancelable = false;
		if (status == undefined) status = 0;
		status = /*int*/Math.floor(status);
		
		this.Event_constructor(type, bubbles, cancelable);
		this.m_status = status;
		return;
		
	};
	
	/*override*/
	/*public*/
	d.clone = function ()/*Event*/
	{
		return new flash.events.HTTPStatusEvent(this.get_type(), this.get_bubbles(), this.get_cancelable(), this.get_status());
		
	};
	
	/*override*/
	/*public*/
	d.toString = function ()/*String*/
	{
		return this.formatToString("HTTPStatusEvent", "type", "bubbles", "cancelable", "eventPhase", "status");
		
	};
	
	
	var s = {};
	
	s.__init__ = function ()
	{
		/*super*/
		/*public*/
		this.prototype.Event_constructor = this.__base__;
		
		/*public*/
		this/*const*/.HTTP_STATUS/*String*/ = "httpStatus";
		
	};
	
	
	flash.addDescription("flash.events.HTTPStatusEvent", d, "flash.events.Event", s, null);
	
}
());
