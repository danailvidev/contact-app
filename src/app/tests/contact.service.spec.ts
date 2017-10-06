import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { ContactService } from '../core/contact.service';

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpModule
    ],
    providers: [
      ContactService,
      { provide: XHRBackend, useClass: MockBackend }
    ]
  });
});

it('should get a response', (done) => {
  inject([XHRBackend, ContactService], (mockBackend: MockBackend, service: ContactService) => {
    const body = [
      {
        'id': 1,
        'first_name': 'Aloy',
        'last_name': 'Sobeck',
        'avatar': 'https://pbs.twimg.com/profile_images/862284388012367872/sBzixGdN.jpg'
      },
      {
        'id': 2,
        'first_name': 'Edward',
        'last_name': 'Kenway',
        'avatar': 'https://pbs.twimg.com/profile_images/490623209822105600/1JHdK9lS.jpeg'
      }
    ];
    const status = 200;
    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(new Response(new ResponseOptions({ body, status })));
    });
    service.getContacts().subscribe(response => {
      expect(response).not.toBeNull();
      expect(response.results.length).toBe(2);
      expect(response.results[0].first_name).toEqual('Aloy');
      done();
    });
  })();
});
