// const customer = "David";
// const productPrice = 120;
// const quantity = 3;
// const isMember = true;
// const hasCoupon = true;


// if (productPrice <= 0) {
//     console.log("Precio Inválido")
// } else if (quantity <= 0) {
//     console.log("Cantidad Invalidad")  
// } else {

//     const subtotal = productPrice * quantity;
//     let porcentajeDescuento = 0;

//     if (isMember && hasCoupon) {
//         porcentajeDescuento = 0.15;
//     } else if (isMember) {
//         porcentajeDescuento = 0.1;
//     } else if (hasCoupon) {
//         porcentajeDescuento = 0.05;
//     }

//     const descuento = subtotal * porcentajeDescuento;
//     const total = subtotal - descuento
//     console.log(`Cliente: ${customer}
//                 Subtotal: S/${subtotal}
//                 Descuento: S/${descuento}
//                 Total: S/${total}`)
// }

// const employee = "David";
// const monthlySales = 12000;
// const yearsInCompany = 6;
// const hasWarning = false;

// if (monthlySales < 0) {
//     console.log("Ventas inválidas");
// } else if (yearsInCompany < 0) {
//     console.log("Antigüedad inválida");
// } else if (hasWarning) {
//     console.log("No aplica bono")
// } else {

//     let porcentajeBono = 0;
//     let bonoAdicional = 0;
    
//     if (monthlySales >= 10000) {
//             porcentajeBono = 0.15;
//     } else if (monthlySales >= 7000) {
//             porcentajeBono = 0.1;
//     } else {
//             porcentajeBono = 0.05;
//     }

//     if (yearsInCompany >= 5) {
//     bonoAdicional = 0.02;
//     }
    
//     const bonoTotal = porcentajeBono + bonoAdicional;
//     const montoBono = Math.round(monthlySales * bonoTotal);

//     console.log(`Empleado: ${employee}
//                 Ventas = ${monthlySales}
//                 Bono base = ${porcentajeBono * 100}%
//                 Antigüedad = ${yearsInCompany} años
//                 Bono adicional = ${bonoAdicional * 100}%

//                 Bono total = ${Math.round(bonoTotal * 100)}%
//                 Monto bono = S/${montoBono}`)
// }

//const customer = "David";
// const purchaseAmount = 500;
// const distanceKm = 30;
// const isPremium = true;
// const isUrgent = true;

// if (purchaseAmount < 0) {
//     console.log("Monto inválido")
// } else if (distanceKm <= 0) {
//     console.log("Distancia inválida")
// } else {

//     let tarifa = 10;
//     let adicional = 0;
//     let urgente = 0;

//     if (isPremium && purchaseAmount >= 300) {
//         tarifa = 0;
//     } else if (distanceKm > 20) {
//         adicional = 15;
//     } else if (distanceKm > 10) {
//         adicional = 8;
//     }

//     if (isUrgent) {
//         urgente = 12;
//     }

//     const totalEnvio = tarifa + adicional + urgente; 

//     console.log(`Compra: S/${purchaseAmount}
//                 Distancia: ${distanceKm} km

//                 Tarifa base: S/${tarifa}
//                 Distancia > 10: +S/${adicional}
//                 Urgente: +S/${urgente}

//                 Total envío: S/${totalEnvio}`)
// }

// const customer = "David";
// const basePrice = 300;
// const isMember = true;
// const isWeekend = true;
// const hasCoupon = true;

// if (basePrice <= 0) {
//     console.log("Precio inválido")
// } else {

//     let miembro = 0;
//     let cupon = 0;
//     let finDeSemana = 0;
//     let finalPrice = basePrice;

//     if (isMember) {
//         miembro = 0.1
//         finalPrice -= finalPrice * miembro
//     }
    
//     if (hasCoupon) {
//         cupon = 0.05
//         finalPrice -= finalPrice * cupon
//     }
    
//     if (isWeekend) {
//         finDeSemana = 0.08;
//         finalPrice += finalPrice * finDeSemana
//     }
    
//     if (finalPrice < 400) {
//         finalPrice = 400
//     }

//     console.log(`Cliente: ${customer}
//                 Precio inicial: S/${basePrice}
//                 Descuento miembro: ${miembro * 100}%
//                 Cupón: ${cupon * 100}%
//                 Fin de semana: ${finDeSemana * 100}%
//                 Precio final: S/${finalPrice}`)
// } 

// const applicant = "David";
// const examScore = 72;
// const yearsExperience = 3;
// const hasCertification = true;
// const hasPenalty = false;

// if (examScore < 0 || examScore > 100) {
//     console.log("Nota inválida")
// } else if (yearsExperience < 0) {
//     console.log("Experiencia inválida")
// } else {

//     let bonoExp = 0;
//     let bonoCert = 0;
//     let penalizacion = 0;
//     let clasificacion = "";
//     let finalScore = examScore
    
//     if (yearsExperience >= 5) {
//         bonoExp = 20;
//         finalScore += bonoExp 
//     } else if (yearsExperience >= 2) {
//         bonoExp = 10;
//         finalScore += bonoExp
//     }
    
//     if (hasCertification) {
//         bonoCert = 8;
//         finalScore += bonoCert
//     }
    
//     if (hasPenalty) {
//         penalizacion = 15
//         finalScore -= penalizacion
//     }
    
// if (finalScore > 100) {
//         finalScore = 100;
//     } else if (finalScore < 0) {
//         finalScore = 0;
//     }

//     if (finalScore < 60) {
//         clasificacion = "No aprobado";
//     } else if (finalScore <= 74) {
//         clasificacion = "En evaluación";
//     } else if (finalScore <= 89) {
//         clasificacion = "Aprobado";
//     } else {
//         clasificacion = "Excelente"
//     }

//     console.log(`Postulante: ${applicant}
//                 Nota inicial: ${examScore}
//                 Bono experiencia: ${bonoExp}
//                 Bono certificación: ${bonoCert}
//                 Penalización: ${penalizacion}
//                 Puntaje final: ${finalScore}
//                 Clasificación: ${clasificacion}`)
// }

// const employee = "David";
// const completedTasks = 85;
// const errorCount = 0;
// const overtimeHours = 12;
// const isSupervisor = true;

// if (errorCount < 0) {
//     console.log("El contador de errores no puede ser negativo")
// } else if (overtimeHours < 0) {
//     console.log("Las horas extras no pueden ser negativas")
// } else if (completedTasks < 0 || completedTasks > 100) {
//     console.log("Las tareas complatadas deben estar entre 0 y 100")
// } else {

//     let performanceScore = completedTasks;
//     let bonoError = 0;
//     let bonoHoraExtra = 0;
//     let bonoSupervisor = 0;
//     let clasificacion = ""; 

//         if (errorCount === 0) {
//             bonoError = 10
//             performanceScore += bonoError;
//         } else if (errorCount > 3) {
//             bonoError = -15;
//             performanceScore += bonoError;
//         }

//         if (overtimeHours >= 10) {
//             bonoHoraExtra = 5;
//             performanceScore += bonoHoraExtra
//         }

//         if (isSupervisor) {
//             bonoSupervisor = 8
//             performanceScore += bonoSupervisor
//         }
    
//     if (performanceScore > 100) {
//         performanceScore = 100;
//     } else if (performanceScore < 0) {
//         performanceScore = 0;
//     }

//     if (performanceScore < 60) {
//         clasificacion = "Necesita mejorar";
//     } else if (performanceScore <= 74) {
//         clasificacion = "Rendimiento regular";
//     } else if (performanceScore <= 89) {
//         clasificacion = "Buen rendimiento";
//     } else {
//         clasificacion = "Sobresaliente";
//     }

//     console.log(`Puntaje inicial: ${completedTasks}
//                 Errores: ${errorCount}       → ${bonoError}
//                 Horas extra: ${overtimeHours}  → +${bonoHoraExtra}
//                 Supervisor: +${bonoSupervisor}

//                 Puntaje final: ${performanceScore}
//                 Clasificación: ${clasificacion}`)
// }

// const driver = "David";
// const tripsCompleted = 92;
// const complaints = 1;
// const lateDeliveries = 3;
// const hasSafetyCertificate = true;
// const hadAccident = false;

// if (complaints < 0) {
// console.log("Complaints no puede ser negativo")
// } else if (lateDeliveries < 0) {
// console.log("LateDeliveries no puede ser negativo")
// } else if (tripsCompleted < 0 || tripsCompleted > 100) {
// console.log("TripsCompleted debe estar entre 0 y 100")
// } else {

// let score = tripsCompleted;
// let clasificacion = "";
// let reclamo = 0;
// let tardanza = 0;
// let certificado = 0;
// let accidente = 0;

// if (complaints === 0) {
//     reclamo = 10;
//     score += reclamo;
// } else if (complaints >= 3) {
//     reclamo = -20;
//     score += reclamo 
// }

// if (lateDeliveries > 5) {
//     tardanza = -15
//     score += tardanza
// }else if (lateDeliveries > 2) {
//     tardanza = -5
//     score += tardanza
// }

// if (hadAccident) {
//     accidente = -25
//     score += accidente
// } else if (hasSafetyCertificate) {
//     certificado = 8
//     score += certificado
// }

// if (score > 100) {
//     score = 100;
// } else if (score < 0) {
//     score = 0;
// }

// if (score < 60) {
//     clasificacion = "Riesgo alto";
// } else if (score <= 74) {
//     clasificacion = "En obseración";
// } else if (score <= 89) {
//     clasificacion = "Confiable";
// } else {
//     clasificacion = "Excelente";
// }

// console.log(`Conductor: ${driver}
//             Puntaje inicial: ${tripsCompleted}
//             Reclamos: ${complaints} → ${reclamo}
//             Tardanzas: ${lateDeliveries} → ${tardanza}
//             Certificado: +${certificado}
//             Accidente: ${accidente}
//             Puntaje final: ${score}
//             Clasificación: ${clasificacion}`)

// }

// const customer = "David";
// const subtotal = 800;
// const isPremium = true;
// const hasCoupon = true;
// const isWeekend = true;
// const hadLatePayment = false;

// if (subtotal <= 0) {
//     console.log("El subtotal debe ser mayor a 0")
// } else {

//     let precio = subtotal;
//     let descuentoPremiun = 0;
//     let descuentoCupon = 0;
//     let descuentoFinDeSemana = 0;
//     let retraso = "No";

//     if (hadLatePayment) {
//         retraso = "Si";
//     } else if (isPremium) {
//         descuentoPremiun = 0.1;
//         precio -= precio * descuentoPremiun
//     }
    
//     if (hasCoupon) {
//         descuentoCupon = 0.05;
//         precio -= precio * descuentoCupon
//     }
    
//     if (isWeekend) {
//         descuentoFinDeSemana = 0.08;
//         precio += precio * descuentoFinDeSemana
//     }
    
//     if (precio < 500) {
//         precio = 500;
//     } else if (precio > 1000) {
//         precio = 1000;
//     }

//     console.log(`Cliente: ${customer}
//                 Precio inicial: S/${subtotal}
//                 Premium: -${descuentoPremiun * 100}%
//                 Cupón: -${descuentoCupon * 100}%
//                 Fin de semana: +${descuentoFinDeSemana * 100}%
//                 Pago atrasado: ${retraso}
//                 Precio final: S/${precio}`)
// }

// const seller = "David";
// const salesAmount = 15000;
// const returnsAmount = 1200;
// const yearsInCompany = 4;
// const isTopSeller = true;
// const hasSeriousComplaint = false;

// if (salesAmount < 0) {
//     console.log("salesAmount no puede ser negativo")
// } else if (returnsAmount < 0) {
//     console.log("returnsAmount no puede ser negativo")
// } else if (returnsAmount > salesAmount) {
//     console.log("returnsAmount no puede ser mayor que salesAmount")
// } else if (yearsInCompany < 0) {
//     console.log("yearsInCompany no puede ser negativo")
// } else {

//     let comision = 0;
//     const ventasNetas = salesAmount - returnsAmount;
//     let comisionFinal = 0;
//     let bonoAntiguedad = 0;
//     let topSeller = 0;
//     let queja = "No"

//     if(ventasNetas < 5000) {
//         comision = 0.03;
//     } else if (ventasNetas < 10000) {
//         comision = 0.05;
//     } else if (ventasNetas < 15000) {
//         comision = 0.08;
//     } else {
//         comision = 0.12;
//     }
    
//     comisionFinal += comision
    
//     if (yearsInCompany >= 5) {
//         bonoAntiguedad = 0.02;
//         comisionFinal += bonoAntiguedad
//     }
    
//     if (hasSeriousComplaint) {
//         queja = "Si"
//     } else if (isTopSeller) {
//         topSeller = 0.03;
//         comisionFinal += topSeller
//     }
    
//     if (comisionFinal > 0.15) {
//         comisionFinal = 0.15
//     }
    
//     const montoComision = ventasNetas * comisionFinal;

//     console.log(`Vendedor: ${seller}
//                 Ventas: S/${salesAmount}
//                 Devoluciones: S/${returnsAmount}
//                 Ventas netas: S/${ventasNetas}
//                 Comisión base: ${comision * 100}%
//                 Bono antigüedad: ${bonoAntiguedad * 100}%
//                 Bono Top Seller: ${topSeller * 100}%
//                 Queja grave: ${queja}
//                 Comisión final: ${comisionFinal * 100}%
//                 Monto comisión: S/${montoComision}`)
// }

// const account = "David";
// const balance = 500;
// const withdrawal = 500;
// const dailyWithdrawn = 0;
// const dailyLimit = 1000;
// const isActive = true;
// const isBlocked = false;

// if (balance < 0) {
//     console.log("El balance no puede ser negativo.")
// } else if (withdrawal <= 0) {
//     console.log("withdrawal debe ser mayor que 0.")
// } else if (dailyWithdrawn < 0) {
//     console.log("dailyWithdrawn no puede ser negativo.")
// } else if (dailyLimit <= 0) {
//     console.log("dailyLimit debe ser mayor que 0")
// } else if (!isActive) {
//     console.log("Cuenta inactiva")
// } else if (isBlocked) {
//     console.log("Cuenta bloqueada")
// } else {

//     let status = "";
//     const acumuladoDiario = dailyWithdrawn + withdrawal;
    
//     if (withdrawal > balance) {
//         console.log("Saldo insuficiente.")
//     } else if (acumuladoDiario > dailyLimit) {
            
//             status = "Límite diario excedido."
//             console.log(`Cuenta: ${account}
//                 Saldo actual: S/${balance}
//                 Retiro solicitado: S/${withdrawal}
//                 Retirado hoy: S/${dailyWithdrawn}
//                 Límite diario: S/${dailyLimit}
//                 Estado: ${status}`)
                
//     } else {
                
//                 const nuevoSaldo = balance - withdrawal
//                 status = "Retiro Exitoso."
//                 console.log(`Cuenta: ${account}
//                     Saldo actual: S/${balance}
//                     Retiro solicitado: S/${withdrawal}
//                     Retirado hoy: S/${dailyWithdrawn}
//                     Límite diario: S/${dailyLimit}
//                     Nuevo saldo: S/${nuevoSaldo}
//                     Nuevo acumulado diario: S/${acumuladoDiario}
//                     Estado: ${status}`)

//             }
// }

// const orderId = "ORD-001";
// const stock = 10;
// const requestedQuantity = 6;
// const paymentApproved = true;
// const customerBlocked = false;
// const isExpress = true;

// if (stock < 0) {
//     console.log("El stock no puede ser negativo.");
// } else if (requestedQuantity <= 0) {
//     console.log("requestedQuantity debe ser mayor que 0.");
// } else if (customerBlocked) {
//     console.log("Cliente bloqueado.");
// } else if (!paymentApproved) {
//     console.log("Pago rechazado.");
// } else if (requestedQuantity > stock) {
//     console.log("Stock insuficiente.");
// } else {

//     const clienteBloqueado = "No";
//     let envio = "Estándar";
//     const orderApprov = "Orden aprobada"
//     const pagoAprobado = "Sí"

//     if (isExpress) {
//         envio = "Express"
//     }
    
//     const status = `${orderApprov} - Envío ${envio}`
    
//     console.log(`Orden: ${orderId}
//                 Stock disponible: ${stock}
//                 Cantidad solicitada: ${requestedQuantity}
//                 Pago aprobado: ${pagoAprobado}
//                 Cliente bloqueado: ${clienteBloqueado}
//                 Tipo de envío: ${envio}
//                 Estado: ${status}`)
// }

// const product = "Laptop";
// const stock = 6;
// const requestedQuantity = 3;
// const minimumStock = 3;
// const paymentApproved = true;
// const isReserved = false;

// if (stock < 0) {
//     console.log("Stock inválido");
// } else if (requestedQuantity <= 0) {
//     console.log("Cantidad inválida");
// } else if (minimumStock < 0) {
//     console.log("Stock mínimo inválido");
// } else if (!paymentApproved) {
//     console.log("Pago rechazado");
// } else if (isReserved) {
//     console.log("Producto reservado");
// } else if (requestedQuantity > stock) {
//     console.log("Stock insuficiente");
// } else {

//     const stockRestante = stock - requestedQuantity;
//     let status = "";

//     if (stockRestante > minimumStock) {
//         status = "Venta aprobada - Stock normal";
//     } else if (stockRestante === minimumStock) {
//         status = "Venta aprobada - Stock mínimo";
//     } else {
//         status = "Venta aprobada - Reposición requerida";
//     }

//     console.log(`Producto: ${product}
//                 Stock inicial: ${stock}
//                 Cantidad solicitada: ${requestedQuantity}
//                 Stock restante: ${stockRestante}
//                 Stock mínimo: ${minimumStock}
//                 Estado: ${status}`)
// }

// const guest = "David";
// const pricePerNight = 180;
// const nights = 4;
// const availableRooms = 3;
// const requestedRooms = 1;
// const isMember = true;
// const isHighSeason = true;

// if (pricePerNight <= 0) {
//     console.log("pricePerNight debe ser mayor que 0")
// } else if (nights <= 0) {
//     console.log("Nights debe ser mayor que 0")
// } else if (availableRooms < 0) {
//     console.log("availableRooms no puede ser negativo")
// } else if (requestedRooms <= 0) {
//     console.log("requestedRooms debe ser mayor que 0")
// } else if (requestedRooms > availableRooms) {
//     console.log("Habitaciones insuficientes")
// } else {

//     const subTotal = pricePerNight * nights * requestedRooms;
//     let descuentoMiembro = 0;
//     let temporadaAlta = 0;
//     let total = subTotal
//     const status = "Reserva confirmada"

//     if (isMember) {
//         descuentoMiembro = 0.1;
//         total -= total * descuentoMiembro
//     }
    
//     if (isHighSeason) {
//         temporadaAlta = 0.2;
//         total += total * temporadaAlta
//     }


//     console.log(`Huésped: ${guest}
//                 Precio por noche: S/${pricePerNight}
//                 Noches: ${nights}
//                 Habitaciones: ${requestedRooms}
//                 Subtotal: S/${subTotal}
//                 Descuento miembro: ${descuentoMiembro * 100}%
//                 Recargo temporada alta: ${temporadaAlta * 100}%
//                 Total: S/${total.toFixed(2)}
//                 Estado: ${status}`)
// }

// const guest = "David";
// const reservationAmount = 900;
// const depositPaid = 300;
// const daysBeforeCheckIn = 12;
// const isCancelled = true;
// const isVIP = true;

// if (reservationAmount <= 0) {
//     console.log("reservationAmount debe ser mayor que 0.")
// } else if (depositPaid < 0) {
//     console.log("depositPaid no puede ser negativo.")
// } else if (depositPaid > reservationAmount) {
//     console.log("depositPaid no puede ser mayor que reservationAmount.")
// } else if (daysBeforeCheckIn < 0) {
//     console.log("daysBeforeCheckIn no puede ser negativo.")
// } else {

//     let reservationStatus = "";
//     let paymentStatus = "No aplica";
//     let devolucion = 0;
//     let vip = "No";
    
//     if (isVIP) {
//         vip = "Sí";
//     }
    
    
//     if (isCancelled) {
        
//         reservationStatus = "Cancelada"
        
//         if (daysBeforeCheckIn >= 15) {
//             devolucion = depositPaid;
//         } else if (daysBeforeCheckIn >= 7) {
//             devolucion = depositPaid * 0.5
//         }
        
//         if (isVIP) {
//             devolucion += depositPaid * 0.1
//         }    
        
//         if (devolucion > depositPaid) {
//         devolucion = depositPaid
//         }

//     } else {

//         reservationStatus = "Activa";

//         if (depositPaid === reservationAmount) {
            
//             paymentStatus = "Pagado";
            
//         } else if (depositPaid > 0) {
            
//             const saldoPendiente = reservationAmount - depositPaid;
//             paymentStatus = `Pago parcial - Saldo pendiente S/${saldoPendiente}`;
            
//         } else {
            
//             paymentStatus = "Pendiente de pago";
            
//         }
        
//     }

//     console.log(`Huésped: ${guest}
//                 Reserva: S/${reservationAmount}
//                 Depósito pagado: S/${depositPaid}
//                 Días antes del check-in: ${daysBeforeCheckIn}
//                 VIP: ${vip}
//                 Estado: ${reservationStatus}
//                 Estado de pago: ${paymentStatus}
//                 Devolución: S/${devolucion.toFixed(2)}`)
// }

// const account = "David";
// const balance = 2500;
// const transferAmount = 800;
// const dailyTransferred = 400;
// const dailyLimit = 2000;
// const isActive = true;
// const isBlocked = false;
// const recipientValid = true;
// const isInternational = false;

// if (balance < 0) {
//     console.log("Balance no puede ser negativo.");
// } else if (transferAmount <= 0) {
//     console.log("transferAmount debe ser mayor que 0");
// } else if (dailyTransferred < 0) {
//     console.log("dailyTransferred no puede ser negativo.");
// } else if (dailyLimit <= 0) {
//     console.log("dailyLimit debe ser mayor que 0");
// } else if (!isActive) {
//     console.log("Cuenta inactiva")
// } else if (isBlocked) {
//     console.log("Cuenta bloqueada")
// } else if (!recipientValid) {
//     console.log("Destinatario inválido")
// } else {

//     let status = "";
//     let tipoTransferencia = "Nacional";
//     let porcentajeComision = 0.02;
    
//     if (isInternational) {
//         porcentajeComision = 0.05;
//         tipoTransferencia = "Internacional";
//     }

//     const comision = transferAmount * porcentajeComision;
//     const totalDescontado = transferAmount + comision;
//     const nuevoAcumuladoDiario = dailyTransferred + transferAmount;
    
//     if (balance < totalDescontado) {
//         status = "Saldo insuficiente";
//         console.log(`Estado: ${status}`);
//     } else if (nuevoAcumuladoDiario > dailyLimit) {
//         status = "Límite diario excedido";
//         console.log(`Estado: ${status}`);
//     } else {
//         status = "Transferencia exitosa";
//         const nuevoSaldo = balance - totalDescontado;
//         console.log(`Cuenta: ${account}
//                     Saldo inicial: S/${balance}
//                     Transferencia: S/${transferAmount}
//                     Tipo: ${tipoTransferencia}
//                     Comisión: S/${comision}
//                     Total descontado: S/${totalDescontado}
//                     Transferido hoy: S/${dailyTransferred}
//                     Nuevo acumulado diario: S/${nuevoAcumuladoDiario}
//                     Nuevo saldo: S/${nuevoSaldo}
//                     Estado: ${status}`);
//     }
// }
    
// const customer = "David";
// const orderAmount = 180;
// const availableCredit = 250;
// const dailyOrdersAmount = 300;
// const dailyOrderLimit = 600;
// const isRestaurantOpen = true;
// const isCustomerBlocked = false;
// const hasDelivery = true;
// const isExpressDelivery = true;

// if (orderAmount <= 0) {
//     console.log("El pedido debe ser mayor que 0");
// } else if (availableCredit < 0) {
//     console.log("El crédito disponible no puede ser negativo");
// } else if (dailyOrdersAmount < 0) {
//     console.log("El acumulado diario no puede ser negativo");
// } else if (dailyOrderLimit <= 0) {
//     console.log("El límite diario debe ser mayor que 0");
// } else if (!isRestaurantOpen) {
//     console.log("Restaurante cerrado");
// } else if (isCustomerBlocked) {
//     console.log("Cliente bloqueado");
// } else if (!hasDelivery) {
//     console.log("Delivery no disponible");
// } else {

//     let comisionDeEnvio = 0.05;
//     let tipoEnvio = "Normal";
    
//     if (isExpressDelivery) {
//         tipoEnvio = "Express"
//         comisionDeEnvio = 0.1;
//     }
    
//     const costoDeEnvio = orderAmount * comisionDeEnvio;
//     const total = orderAmount + costoDeEnvio;
//     let status = "";
//     const acumulado = dailyOrdersAmount + orderAmount;

//     if (total > availableCredit) {

//         status = "Crédito insuficiente";
//         console.log(`Estado: ${status}`);

//     } else if (acumulado > dailyOrderLimit) {

//         status = "Limite diario de pedidos excedido";
//         console.log(`Estado: ${status}`);

//     } else {

//         status = "Pedido Confirmado"
//         const credito = availableCredit - total;

//         console.log(`Pedido: S/${orderAmount}
//                     Envío ${tipoEnvio}: S/${costoDeEnvio}
//                     Total: S/${total}
//                     Crédito: S/${credito}
//                     Acumulado: S/${acumulado}
//                     Estado: ${status}`);
//     }
// }





// const customer = "David";
// const unitPrice = 75;
// const quantity = 4;
// const stock = 10;
// const budget = 300;
// const isMember = true;
// const hasCoupon = true;
// const isExpressShipping = false;

// if (unitPrice <= 0) {
//     console.log("unitPrice debe ser mayor que 0");
// } else if (quantity <= 0) {
//     console.log("quantity debe ser mayor que 0");
// } else if (stock < 0) {
//     console.log("stock no puede ser negativo");
// } else if (budget < 0) {
//     console.log("budget no puede ser negativo");
// } else if (quantity > stock) {
//     console.log("Stock insuficiente");
// } else {

//     const subtotal = unitPrice * quantity;
//     let descuentoMiembro = 0;
//     let descuentoCupon = 0;
//     let precioConDescuento = subtotal;
//     let costoEnvio = 10;
//     let envio = "Normal";
//     let status = "";
    
//     if (isMember) {
//         descuentoMiembro = 0.1;
//         precioConDescuento -= precioConDescuento * descuentoMiembro;
//     }
    
//     if (hasCoupon) {
//         descuentoCupon = 0.05;
//         precioConDescuento -= precioConDescuento * descuentoCupon;
//     }

//     if (isExpressShipping) {
//         costoEnvio = 25;
//         envio = "Express";
//     }

//     const totalFinal = precioConDescuento + costoEnvio;

//     if (totalFinal > budget) {
//         status = "Presupuesto insuficiente";
//         console.log(`Estado: ${status}`);
//     } else {

//         status = "Compra aprobada";
//         const stockRestante = stock - quantity;
//         const presupuestoRestante = budget - totalFinal;
    
//         console.log(`Cliente: ${customer}
//                     Subtotal: S/${subtotal}
//                     Descuento miembro: ${descuentoMiembro * 100}%
//                     Cupón: ${descuentoCupon * 100}%
//                     Envío: ${envio}
//                     Costo envío: S/${costoEnvio}
//                     Total final: S/${totalFinal.toFixed(2)}
//                     Stock restante: ${stockRestante}
//                     Presupuesto restante: S/${presupuestoRestante.toFixed(2)}
//                     Estado: ${status}`);
//     }
// }

// const customer = "David";
// const ticketPrice = 45;
// const quantity = 4;
// const availableTickets = 20;
// const budget = 200;
// const isMember = true;
// const hasPromoCode = true;
// const isWeekend = true;
// const isEventCancelled = false;

// if (ticketPrice <= 0) {
//     console.log("El precio del ticket debe ser mayor que 0");
// } else if (quantity <= 0) {
//     console.log("La cantidad de tickets tiene que ser mayor a 0");
// } else if (availableTickets < 0) {
//     console.log("La disponibilidad de entradas no puede ser negativa");
// } else if (budget < 0) {
//     console.log("El presupuesto no puede ser negativo");
// } else {

//     if (isEventCancelled) {
//         console.log("Evento cancelado");
//     } else if (quantity > availableTickets) {
//         console.log("Entradas insuficientes");
//     } else {

//         const subTotal = ticketPrice * quantity;
//         let precioConDescuento = subTotal;
//         let descuentoMiembro = 0;
        
//         if (isMember) {
//             descuentoMiembro = 0.1;
//             precioConDescuento -= precioConDescuento * descuentoMiembro;
//         }
        
//         let descuentoCodigo = 0;
        
//         if (hasPromoCode) {
//             descuentoCodigo = 0.05;
//             precioConDescuento -= precioConDescuento * descuentoCodigo;
//         }
        
//         let recargoFinDeSemana = 0;
//         let finDeSemana = "No";
        
//         if (isWeekend) {
//             finDeSemana = "Sí"
//             recargoFinDeSemana = 0.15;
//             precioConDescuento += precioConDescuento * recargoFinDeSemana;
//         }
    
//         let status = "Reserva confirmada";
    
//         if (precioConDescuento > budget) {
//             status = "Presupuesto insuficiente";
//             console.log(`Estado: ${status}`);
//         } else {
    
//             const entradasRestantes = availableTickets - quantity;
//             const presupuestoRestante = budget - precioConDescuento;
    
//             console.log(`Cliente: ${customer}
//                         Cantidad: ${quantity}
//                         Subtotal: S/${subTotal.toFixed(2)}
//                         Descuento miembro: ${descuentoMiembro * 100}%
//                         Código promocional: ${descuentoCodigo * 100}%
//                         Fin de semana: ${finDeSemana}
//                         Recargo: ${recargoFinDeSemana * 100}%
//                         Total: S/${precioConDescuento.toFixed(2)}
//                         Entradas restantes: ${entradasRestantes}
//                         Presupuesto restante: S/${presupuestoRestante.toFixed(2)}
//                         Estado: ${status}`);
//         }
//     }
// }

// const employee = "David";
// const baseSalary = 1800;
// const overtimeHours = 8;
// const overtimeRate = 15;
// const lateDays = 2;
// const completedGoals = 95;
// const hasSeriousFault = false;
// const isSupervisor = true;

// if (baseSalary <= 0) {
//     console.log("El sueldo base tiene que ser mayor a 0");
// } else if (overtimeHours < 0) {
//     console.log("Las horas extras no pueden ser negativas");
// } else if (overtimeRate <= 0) {
//     console.log("La tarifa de horas extras deben ser mayor que 0");
// } else if (lateDays < 0) {
//     console.log("Los días de retraso no pueden ser negativas");
// } else if (completedGoals < 0 || completedGoals > 100) {
//     console.log("Los objetivos completados estan fuera del rango establecido de 0 a 100");
// } else {
    
//     const horasExtras = overtimeHours * overtimeRate;
//     let sueldoFinal = baseSalary + horasExtras;
//     let bonoMetas = 0;
//     let bonoSupervisor = 0;
//     let descuentoFalta = 0;
//     const status = "Pago procesado";

//     if (hasSeriousFault) {

//         const descuentoFaltaGrave = 0.2;
//         descuentoFalta = baseSalary * descuentoFaltaGrave;
//         sueldoFinal -= baseSalary * descuentoFaltaGrave;

//     } else {

//         let porcentajeBonoMetas = 0;

//         if (completedGoals >= 90) {
//             porcentajeBonoMetas = 0.12
//         } else if (completedGoals >= 80) {
//             porcentajeBonoMetas = 0.07;
//         } else if (completedGoals >= 70) {
//             porcentajeBonoMetas = 0.03;
//         }

//         sueldoFinal += baseSalary * porcentajeBonoMetas;
//         bonoMetas = baseSalary * porcentajeBonoMetas;
//         let porcentajeBonoSupervisor = 0;

//         if (isSupervisor) {
//             porcentajeBonoSupervisor = 0.05;
//             sueldoFinal += baseSalary * porcentajeBonoSupervisor;
//         }
//         bonoSupervisor = baseSalary * porcentajeBonoSupervisor
//     }

//     let porcentajeTardanza = 0;

//     if (lateDays >= 5) {
//         porcentajeTardanza = 0.12;
//     } else if (lateDays >= 3) {
//         porcentajeTardanza = 0.07;
//     } else if (lateDays >= 1) {
//         porcentajeTardanza = 0.03;
//     } 

//     sueldoFinal -= baseSalary * porcentajeTardanza;
//     const descuentoTardanza = baseSalary * porcentajeTardanza;

//     console.log(`Empleado: ${employee}
//                 Sueldo base:        S/${baseSalary.toFixed(2)}
//                 Horas extras:        S/${horasExtras.toFixed(2)}
//                 Bono metas:          S/${bonoMetas.toFixed(2)}
//                 Bono supervisor:      S/${bonoSupervisor.toFixed(2)}
//                 Descuento tardanzas:  S/${descuentoTardanza.toFixed(2)}
//                 Descuento Falta:     S/${descuentoFalta}
//                 Estado: ${status}
//                 -------------------------
//                 Sueldo final:       ${sueldoFinal.toFixed(2)}`);
    
// }

// const client = "David";
// const monthlyIncome = 4500;
// const requestedLoan = 12000;
// const currentDebt = 1500;
// const creditScore = 480;
// const yearsAsClient = 4;
// const hasLatePayments = false;
// const hasFraudAlert = false;

// if (monthlyIncome <= 0) {
//     console.log("Los ingresos mensuales tienen que ser mayor a 0");
// } else if (requestedLoan <= 0) {
//     console.log("El prestamo solicitado tiene que ser mayor a 0");
// } else if (currentDebt < 0) {
//     console.log("La deuda actual no puede ser negativa");
// } else if (creditScore < 300 || creditScore > 850) {
//     console.log("El puntaje de credito esta fuera del rango establecido de 300 a 850 ");
// } else if (yearsAsClient < 0) {
//     console.log("Los años como cliente no pueden ser negativos");
// } else {

//     const capacidadMaxima = monthlyIncome * 4;
    
//     if (hasFraudAlert) {
//         console.log("Crédito Rechazado")
//     } else if(requestedLoan > capacidadMaxima) {
//         console.log("Monto solicitado excede capacidad");
//     } else {

//         let riesgo = "";
        
//         if (creditScore < 650) {
//             riesgo = "Alto";
//         } else if (creditScore < 750) {
//             riesgo = "Medio";
//         } else if (creditScore <= 850) {
//             riesgo = "Bajo";
//         }
        
//         let internalScore = 0;
        
//         if (yearsAsClient >= 3) {
//             internalScore = 5
//         }
        
//         if (currentDebt > (monthlyIncome * 0.5)) {
//             internalScore -= 10;
//         }
        
//         if (hasLatePayments) {
//             internalScore -= 20;
//         }
        
//         let status = "" ;

//         if (riesgo === "Alto") {
//             status = "Crédito Rechazado";
//         } else if (riesgo === "Medio" && internalScore < 0) {
//             status = "Crédito Rechazado";
//         }else {
//             status = "Crédito Aprobado"
//         }

//             console.log(`Cliente: ${client}
//                         Ingreso mensual: S/${monthlyIncome}
//                         Préstamo solicitado: S/${requestedLoan}
//                         Capacidad máxima: S/${capacidadMaxima}
//                         Riesgo: ${riesgo}
//                         Puntaje interno: ${internalScore}
//                         Estado: ${status}`)
//         }
// }

// const supplier = "PROVEEDOR NORTE";
// const orderAmount = 8500;
// const availableBudget = 12000;
// const previousPurchases = 3000;
// const monthlyPurchaseLimit = 15000;
// const supplierScore = 82;
// const yearsWorkingTogether = 4;
// const hasPendingDebt = false;
// const isUrgent = true;
// const supplierBlocked = false;

// if (orderAmount <= 0) {
//     console.log("El importe del pedido tiene que ser mayor que 0");
// } else if (availableBudget < 0) {
//     console.log("El presupuesto disponible no puede ser negativo");
// } else if (previousPurchases < 0) {
//     console.log("La compra anterior no puede ser negativa");
// } else if (monthlyPurchaseLimit <= 0) {
//     console.log("El límite de compra mensual tiene que ser mayor que 0");
// } else if (supplierScore < 0 || supplierScore > 100) {
//     console.log("La puntuación del proveedor esta fuera del rango establecido de 0 - 100");
// } else if (yearsWorkingTogether < 0) {
//     console.log("Los años trabajando juntos no pueden ser negativos");
// } else if (supplierBlocked) {
//     console.log("Proveedor bloqueado");
// } else {

//     let clasificacion = "";

//     if (supplierScore < 60) {
//         clasificacion = "Riesgoso";
//     } else if (supplierScore < 75) {
//         clasificacion = "Regular";
//     } else if (supplierScore < 90) {
//         clasificacion = "Bueno";
//     } else {
//         clasificacion = "Excelente";
//     }

//     let limitePermitido = monthlyPurchaseLimit;
//     let urgente = "No";

//     if (isUrgent) {
//         urgente = "Sí";
//         limitePermitido += limitePermitido * 0.1;
//     }

//     const nuevoAcumulado = previousPurchases + orderAmount;
//     let trustScore = 0;

//     if (yearsWorkingTogether >= 3) {
//         trustScore = 10;
//     } 

//     if (hasPendingDebt){
//         trustScore -= 25;
//     }

//     let status = "";

//     if (orderAmount > availableBudget) {
//         status ="Presupuesto insuficiente";
//         console.log(`Estado: ${status}`)
//     } else if(nuevoAcumulado > limitePermitido) {
//         status ="Límite mensual excedido";
//         console.log(`Estado: ${status}`)
//     } else if (clasificacion === "Riesgoso") {
//         status ="Orden rechazada";
//         console.log(`Estado: ${status}`)
//     } else if (clasificacion === "Regular" && trustScore < 0) {
//         status ="Orden rechazada";
//         console.log(`Estado: ${status}`)
//     } else {
//         status = "Orden Aprobada";
//         const presupuestoRestante = availableBudget - orderAmount;
//         console.log(`Proveedor: ${supplier}
//                     Monto de la orden: S/${orderAmount}
//                     Presupuesto disponible: S/${availableBudget}
//                     Compras previas: S/${previousPurchases}
//                     Límite mensual base: S/${monthlyPurchaseLimit}
//                     Límite permitido: S/${limitePermitido}
//                     Urgente: ${urgente}
//                     Clasificación: ${clasificacion}
//                     Puntaje de confianza: ${trustScore}
//                     Nuevo acumulado mensual: S/${nuevoAcumulado}
//                     Presupuesto restante: S/${presupuestoRestante}
//                     Estado: ${status}`);
//     }
// }

// const product = "Mango congelado";
// const requestedKg = 4200;
// const stockKg = 7000;
// const reservedKg = 1500;
// const truckCapacityKg = 5000;
// const pricePerKg = 3.5;
// const availableBudget = 16000;
// const qualityScore = 88;
// const hasQualityAlert = false;
// const isUrgent = true;

// if (requestedKg <= 0) {
//     console.log("Los Kg solicitados tiene que ser mayor que 0");
// } else if (stockKg < 0) {
//     console.log("Los Kg en stock no pueden ser negativos");
// } else if (reservedKg < 0) {
//     console.log("Los Kg reservados no puedes ser negativos");
// } else if (reservedKg > stockKg) {
//     console.log("Los Kg de reserva no pueden ser mayor a los Kg en stock");
// } else if (truckCapacityKg <= 0) {
//     console.log("La capacidad en Kg del camión tiene que ser mayor que 0");
// } else if (pricePerKg <= 0) {
//     console.log("pricePerKg tiene que ser mayor que 0")
// } else if (availableBudget < 0) {
//     console.log("El presupuesto disponible no puede ser negativo");
// } else if (qualityScore < 0 || qualityScore > 100) {
//     console.log("La puntuación de calidad debe estar entre 0 a 100");
// } else {

//     const stockDisponible = stockKg - reservedKg;
//     let status = "";

//     if (hasQualityAlert) {
//         status = "Despacho bloqueado por calidad";
//         console.log(`Estado: ${status}`);
//     } else {

//         let clasificacion = "";
        
//         if (qualityScore < 70) {
//             clasificacion = "Rechazada";
//         } else if (qualityScore < 80) {
//             clasificacion = "Observada";
//         } else if (qualityScore < 90) {
//             clasificacion = "Aprobada";
//         } else {
//             clasificacion = "Excelente";
//         }
        
//         let capacidadPermitida = truckCapacityKg;
//         let urgente = "No";
        
//         if (isUrgent) {
//             urgente = "Sí";
//             capacidadPermitida += capacidadPermitida * 0.1;
//         }

//         const costoPedido = requestedKg * pricePerKg;

//         if (requestedKg > stockDisponible) {
//             status = "Stock disponible insuficiente";
//             console.log(`Estado: ${status}`);
//         } else if (requestedKg > capacidadPermitida) {
//             status = "Capacidad de transporte excedida";
//             console.log(`Estado: ${status}`);
//         } else if (costoPedido > availableBudget) {
//             status = "Presupuesto insuficiente";
//             console.log(`Estado: ${status}`);
//         } else if (clasificacion === "Rechazada") {
//             status = "Despacho Rechazado"
//             console.log(`Estado: ${status}`);
//         } else if (clasificacion === "Observada" && !isUrgent) {
//             status = "Despacho requiere revisión";
//             console.log(`Estado: ${status}`);
//         } else {

//             status = "Despacho Aprobado"
//             const stockRestante = stockDisponible - requestedKg;
//             const presupuestoRestante = availableBudget - costoPedido;

//             console.log(`Producto: ${product}
//                         Kg solicitados: ${requestedKg}
//                         Stock físico: ${stockKg}
//                         Stock reservado: ${reservedKg}
//                         Stock disponible: ${stockDisponible}
//                         Capacidad base: ${truckCapacityKg}
//                         Capacidad permitida: ${capacidadPermitida}
//                         Urgente: ${urgente}
//                         Clasificación de calidad: ${clasificacion}
//                         Costo: ${costoPedido}
//                         Stock restante: ${stockRestante}
//                         Presupuesto restante: ${presupuestoRestante}
//                         Estado: ${status}`);
//         }
//     }
// }

// const customer = "Cliente Mayorista Norte";
// const orderAmount = 7200;
// const availableCredit = 10000;
// const currentDebt = 1800;
// const creditLimit = 12000;
// const customerScore = 76;
// const yearsAsCustomer = 5;
// const hasOverdueDebt = false;
// const isPreferredCustomer = true;
// const isAccountBlocked = false;

// if (orderAmount <= 0) {
//     console.log("El monto pedido debe ser mayor que 0");
// } else if (availableCredit < 0) {
//     console.log("El crédito disponible no puede ser negativo");
// } else if (currentDebt < 0) {
//     console.log("La deuda actual no puede ser negativo");
// } else if (creditLimit <= 0) {
//     console.log("El límite de crédito debe ser mayor que 0");
// } else if (customerScore < 0 || customerScore > 100) {
//     console.log("La puntuación del cliente debe estar entre 0 y 100");
// } else if (yearsAsCustomer < 0) {
//     console.log("Los años como cliente no pueden ser negativos");
// } else if (isAccountBlocked) {
//     console.log("Cuenta bloqueada");
// } else {

//     let creditoReal = availableCredit - currentDebt;
//     let estado = ""

//     if (creditoReal < 0) {
//         creditoReal = 0;
//     }

//     if (hasOverdueDebt && currentDebt > creditLimit * 0.5) {
//         estado = "Venta rechazada por mora crítica";
//         console.log(`Estado: ${estado}`);
//     } else {

//         const nuevoEndeudamiento = currentDebt + orderAmount;
    
//         let clasificacion = "";
        
//         if (customerScore < 60) {
//             clasificacion = "Riesgoso";
//         } else if (customerScore < 75) {
//             clasificacion = "Regular";
//         } else if (customerScore < 90) {
//             clasificacion = "Bueno";
//         } else {
//             clasificacion = "Excelente";
//         }
    
//         let puntajeDeConfianza = 0;

//         if (yearsAsCustomer >= 3) {
//             puntajeDeConfianza += 10;
//         }

//         if (isPreferredCustomer) {
//             puntajeDeConfianza += 10;
//         }

//         if (hasOverdueDebt) {
//             puntajeDeConfianza -= 30
//         }

//         if (orderAmount > creditoReal) {
//             estado = "Crédito insuficiente";
//             console.log(`Estado: ${estado}`);
//         } else if (nuevoEndeudamiento > creditLimit) {
//             estado = "Límite de crédito excedido";
//             console.log(`Estado: ${estado}`);
//         } else if (clasificacion === "Riesgoso") {
//             estado = "Venta rechazada";
//             console.log(`Estado: ${estado}`);
//         } else if (clasificacion === "Regular" && puntajeDeConfianza < 0) {
//             estado = "Venta rechazada";
//             console.log(`Estado: ${estado}`);
//         } else {

//             estado = "Venta Aprobada";
//             const creditoRestante = creditoReal - orderAmount;
//             console.log(`Cliente: ${customer}
//                         Monto pedido: ${orderAmount}
//                         Crédito disponible inicial: ${availableCredit}
//                         Deuda actual: ${currentDebt}
//                         Crédito real: ${creditoReal}
//                         Límite de crédito: ${creditLimit}
//                         Nuevo endeudamiento: ${nuevoEndeudamiento}
//                         Clasificación: ${clasificacion}
//                         Puntaje de confianza: ${puntajeDeConfianza}
//                         Crédito restante: ${creditoRestante}
//                         Estado: ${estado}`);
//         }
//     }
// }

const supplier = "Proveedor Centro";
const orderAmount = 6400;
const availableBudget = 9000;
const monthlyPurchased = 5000;
const monthlyLimit = 13000;
const supplierScore = 78;
const hasPendingDocuments = false;
const hasPaymentIssue = true;
const isPreferredSupplier = true;
const isUrgent = false;

if (orderAmount <= 0) {
    console.log("El importe del pedido debe ser mayor que 0");
} else if (availableBudget < 0) {
    console.log("El presupuesto disponible no puede ser negativo");
} else if (monthlyPurchased < 0) {
    console.log("Las compras mensuales no pueden ser negativas");
} else if (monthlyLimit <= 0) {
    console.log("El límite mensual debe ser mayor que 0");
} else if (supplierScore < 0 || supplierScore > 100) {
    console.log("La puntuación del proveedor debe estar entre 0 y 100")
} else {

    let clasificacion = "";

    if (supplierScore < 60) {
        clasificacion = "Riesgoso";
    } else if (supplierScore < 75) {
        clasificacion = "Regular";
    } else if (supplierScore < 90) {
        clasificacion = "Bueno";
    } else {
        clasificacion = "Excelente";
    }

    let trustScore = 0;
    let limitePermitido = monthlyLimit;

    if (isPreferredSupplier) {
        trustScore += 15;
    }

    if (isUrgent) {
        trustScore += 5;
        limitePermitido += limitePermitido * 0.1
    }

    if (hasPendingDocuments) {
        trustScore -= 20;
    }

    const nuevoAcumulado = monthlyPurchased + orderAmount;

    let orderStatus = "";
    let paymentStatus = "";
    
    if (orderAmount > availableBudget) {
        orderStatus = "Orden rechazada - Presupuesto insuficiente";
        console.log(`Estado de orden: ${orderStatus}`);
    } else if (nuevoAcumulado > limitePermitido) {
        orderStatus = "Orden rechazada - Límite mensual excedido";
        console.log(`Estado de orden: ${orderStatus}`);
    } else if (clasificacion === "Riesgoso") {
        orderStatus = "Orden rechazada - Proveedor riesgoso";
        console.log(`Estado de orden: ${orderStatus}`);
    } else if (clasificacion === "Regular" && trustScore < 0) {
        orderStatus = "Orden rechazada - Confianza insuficiente";
        console.log(`Estado de orden: ${orderStatus}`);
    } else {

        orderStatus = "Orden aprobada";

        if (hasPaymentIssue === true) {
            paymentStatus = "Pago bloqueado"
        } else {
            paymentStatus = "Pago autorizado"
        }

        if (paymentStatus === "Pago autorizado") {
            const presupuestoRestante = availableBudget - orderAmount;
            console.log(`Proveedor: ${supplier}
                        Monto: ${orderAmount}
                        Presupuesto disponible: ${availableBudget}
                        Compras del mes: ${monthlyPurchased}
                        Nuevo Acumulado: ${nuevoAcumulado}
                        Presupuesto Restante: ${presupuestoRestante}
                        Límite base: ${monthlyLimit} 
                        Límite permitido: ${limitePermitido}
                        Clasificación: ${clasificacion}
                        Puntaje de confianza: ${trustScore}
                        Estado de orden: ${orderStatus}
                        Estado de pago: ${paymentStatus}`)
        } else {
            console.log(`Proveedor: ${supplier}
                        Monto: ${orderAmount}
                        Presupuesto disponible: ${availableBudget}
                        Compras del mes: ${monthlyPurchased}
                        Nuevo Acumulado: ${nuevoAcumulado}
                        Límite base: ${monthlyLimit} 
                        Límite permitido: ${limitePermitido}
                        Clasificación: ${clasificacion}
                        Puntaje de confianza: ${trustScore}
                        Estado de orden: ${orderStatus}
                        Estado de pago: ${paymentStatus}`)
        }
    }
}



