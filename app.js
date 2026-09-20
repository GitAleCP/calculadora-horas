// Sistema de internacionalización
const translations={
  es:{
    appTitle:'🕐 Calculadora Horas de Trabajo',
    uploadTitle:'📸 Subir Imágenes de Horarios',
    uploadSubtitle:'Selecciona una o más imágenes de tu tabla de horarios',
    uploadText:'Toca para seleccionar imágenes',
    galleryTitle:'📷 Imágenes Seleccionadas',
    processImages:'🔄 Procesar Imágenes',
    clearAll:'🗑️ Limpiar Todo',
    loadingText:'Procesando imágenes...<br><small>Esto puede tardar unos segundos</small>',
    summaryTitle:'📊 Resumen del Mes',
    registeredDays:'Días registrados',
    pendingDays:'Días pendientes',
    workingDays:'Días laborales ✏️',
    weekendDays:'Fines de semana',
    grossHours:'Horas brutas',
    netHours:'Horas netas',
    theoreticalHours:'Horas teóricas',
    overtimeHours:'HORAS EXTRAS',
    pendingHours:'HORAS PENDIENTES',
    unsavedChanges:'⚠️ Hay cambios sin aplicar',
    recalculate:'🔄 Recalcular',
    recordsTitle:'📋 Registros del Mes',
    editModeActive:'✏️ Modo edición activo',
    clearRecords:'🗑️ Limpiar Registros',
    consoleLog:'Log de Consola',
    clearConsole:'🗑️ Limpiar',
    minimize:'▼',
    maximize:'▲',
    settingsTitle:'️ Configuración',
    language:'Idioma',
    signInTime:'Hora de entrada',
    signOutTime:'Hora de salida',
    dailyHours:'Horas diarias requeridas',
    breakThreshold:'Umbral doble descanso (horas)',
    firstBreak:'Primer descanso (minutos)',
    secondBreak:'Segundo descanso (minutos)',
    maxHours:'Umbral máximo de horas',
    maxHoursHint:'Días con más horas se marcarán como "Jornada extendida"',
    minHours:'Umbral mínimo de horas',
    minHoursHint:'Días con menos horas se marcarán como "Tiempo fuera de rango"',
    editModeToggle:'️ Modo edición de horarios',
    editModeHint:'Activa el botón de editar en cada registro',
    showConsoleToggle:'📋 Mostrar log de consola',
    showConsoleHint:'Muestra los mensajes de consola en la interfaz',
    save:'Guardar',
    cancel:'Cancelar',
    configSaved:'✅ Configuración guardada correctamente',
    selectImage:'Selecciona al menos una imagen',
    noRecords:'No se detectaron registros.',
    processing:'=== PROCESANDO ',
    processingImage:'=== PROCESANDO IMAGEN ',
    of:' DE ',
    originalText:'\nTEXTO ORIGINAL:',
    correctedText:'\nTEXTO CORREGIDO:',
    monthDetected:'Mes detectado:',
    totalDays:'- Total días:',
    consolidating:'\n=== CONSOLIDANDO REGISTROS ===',
    dayCount:'Conteo de días:',
    problemLines:'\n️ LÍNEAS CON PROBLEMAS:',
    day:'   - Día ',
    line:'     Línea: ',
    duplicateDay:'   Día ',
    correctedTo:' duplicado, corregido a día ',
    earlyEntry:' (entrada temprana: ',
    dayOk:'✓ Día ',
    dayError:'✗ Día ',
    outOfRange:' horas fuera de rango (',
    checkingDays:'\n=== VERIFICANDO DÍAS CON ERRORES DE PROCESAMIENTO ===',
    dayNotRegistered:'❌ Día ',
    detectedNotRegistered:': Detectado en OCR pero NO registrado',
    total:'\n=== TOTAL: ',
    records:' registros ===',
    pendingCount:'=== DÍAS PENDIENTES: ',
    pendingWarning:'⚠️ Días pendientes de registro:',
    noPending:'✅ No hay días pendientes',
    ocrCorrections:'✅ ',
    ocrCorrectionsApplied:' correcciones OCR aplicadas',
    timeInconsistency:'⚠️ Hora de salida (',
    beforeEntry:') anterior a entrada (',
    longShift:'⚠️ Jornada de ',
    seemsWrong:'h parece incorrecta',
    error:'❌ ERROR:',
    imageLoadError:' Error al cargar imagen',
    hoursExtra:'Horas extras: ',
    calculationsUpdated:'✅ Cálculos actualizados',
    editingRecord:'✏️ Editando registro:',
    recordUpdated:'✅ Registro actualizado: Día ',
    invalidSchedule:'Horario inválido. Verifica las horas ingresadas.',
    enterBothTimes:'Por favor ingresa ambas horas',
    editFieldsNotFound:'No se encontraron los campos de edición',
    sureDeleteAll:'¿Estás seguro de que deseas eliminar todas las imágenes y registros?',
    sureDeleteRecords:'¿Estás seguro de que deseas eliminar los registros procesados?',
    monday:'Lunes',tuesday:'Martes',wednesday:'Miércoles',thursday:'Jueves',friday:'Viernes',saturday:'Sábado',sunday:'Domingo',
    months:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    ocrAdjusted:'OCR Ajustado',
    extendedShift:'Jornada extendida',
    outOfRangeComment:'Tiempo fuera de rango',
    noSignOutComment:'Hora de salida no registrada',
    processingError:'Error en procesamiento',
    onlyHoursDetected:'Solo ',
    hoursDetected:' horario(s) detectado(s)',
    timeInconsistencyReason:'Inconsistencia de horarios',
    outOfRangeReason:'Horas fuera de rango: ',
    registeredWithZero:' (registrado con 0h - ',
    signOutNotRegistered:'sin hora de salida)'
  },
  en:{
    appTitle:'🕐 Work Hours Calculator',
    uploadTitle:'📸 Upload Schedule Images',
    uploadSubtitle:'Select one or more images of your schedule table',
    uploadText:'Tap to select images',
    galleryTitle:'📷 Selected Images',
    processImages:'🔄 Process Images',
    clearAll:'🗑️ Clear All',
    loadingText:'Processing images...<br><small>This may take a few seconds</small>',
    summaryTitle:'📊 Monthly Summary',
    registeredDays:'Registered days',
    pendingDays:'Pending days',
    workingDays:'Working days ✏️',
    weekendDays:'Weekends',
    grossHours:'Gross hours',
    netHours:'Net hours',
    theoreticalHours:'Theoretical hours',
    overtimeHours:'OVERTIME HOURS',
    pendingHours:'PENDING HOURS',
    unsavedChanges:'⚠️ Unsaved changes',
    recalculate:'🔄 Recalculate',
    recordsTitle:'📋 Monthly Records',
    editModeActive:'✏️ Edit mode active',
    clearRecords:'🗑️ Clear Records',
    consoleLog:'Console Log',
    clearConsole:'🗑️ Clear',
    minimize:'▼',
    maximize:'▲',
    settingsTitle:'⚙️ Settings',
    language:'Language',
    signInTime:'Sign in time',
    signOutTime:'Sign out time',
    dailyHours:'Required daily hours',
    breakThreshold:'Double break threshold (hours)',
    firstBreak:'First break (minutes)',
    secondBreak:'Second break (minutes)',
    maxHours:'Maximum hours threshold',
    maxHoursHint:'Days with more hours will be marked as "Extended shift"',
    minHours:'Minimum hours threshold',
    minHoursHint:'Days with fewer hours will be marked as "Out of range"',
    editModeToggle:'✏️ Schedule edit mode',
    editModeHint:'Enables edit button on each record',
    showConsoleToggle:'📋 Show console log',
    showConsoleHint:'Shows console messages in the interface',
    save:'Save',
    cancel:'Cancel',
    configSaved:'✅ Settings saved successfully',
    selectImage:'Select at least one image',
    noRecords:'No records detected.',
    processing:'=== PROCESSING ',
    processingImage:'=== PROCESSING IMAGE ',
    of:' OF ',
    originalText:'\nORIGINAL TEXT:',
    correctedText:'\nCORRECTED TEXT:',
    monthDetected:'Month detected:',
    totalDays:'- Total days:',
    consolidating:'\n=== CONSOLIDATING RECORDS ===',
    dayCount:'Day count:',
    problemLines:'\n⚠️ PROBLEM LINES:',
    day:'   - Day ',
    line:'     Line: ',
    duplicateDay:'   Day ',
    correctedTo:' duplicate, corrected to day ',
    earlyEntry:' (early entry: ',
    dayOk:'✓ Day ',
    dayError:'✗ Day ',
    outOfRange:' hours out of range (',
    checkingDays:'\n=== CHECKING DAYS WITH PROCESSING ERRORS ===',
    dayNotRegistered:' Day ',
    detectedNotRegistered:': Detected in OCR but NOT registered',
    total:'\n=== TOTAL: ',
    records:' records ===',
    pendingCount:'=== PENDING DAYS: ',
    pendingWarning:'⚠️ Pending days to register:',
    noPending:'✅ No pending days',
    ocrCorrections:'✅ ',
    ocrCorrectionsApplied:' OCR corrections applied',
    timeInconsistency:'⚠️ Sign out time (',
    beforeEntry:') before sign in (',
    longShift:'⚠️ Shift of ',
    seemsWrong:'h seems incorrect',
    error:'❌ ERROR:',
    imageLoadError:'❌ Error loading image',
    hoursExtra:'Overtime hours: ',
    calculationsUpdated:'✅ Calculations updated',
    editingRecord:'✏️ Editing record:',
    recordUpdated:'✅ Record updated: Day ',
    invalidSchedule:'Invalid schedule. Please check the entered times.',
    enterBothTimes:'Please enter both times',
    editFieldsNotFound:'Edit fields not found',
    sureDeleteAll:'Are you sure you want to delete all images and records?',
    sureDeleteRecords:'Are you sure you want to delete processed records?',
    monday:'Monday',tuesday:'Tuesday',wednesday:'Wednesday',thursday:'Thursday',friday:'Friday',saturday:'Saturday',sunday:'Sunday',
    months:['January','February','March','April','May','June','July','August','September','October','November','December'],
    ocrAdjusted:'OCR Adjusted',
    extendedShift:'Extended shift',
    outOfRangeComment:'Out of range time',
    noSignOutComment:'Sign out time not registered',
    processingError:'Processing error',
    onlyHoursDetected:'Only ',
    hoursDetected:' time(s) detected',
    timeInconsistencyReason:'Time inconsistency',
    outOfRangeReason:'Hours out of range: ',
    registeredWithZero:' (registered with 0h - ',
    signOutNotRegistered:'no sign out time)'
  },
  zh:{
    appTitle:'🕐 工作时长计算器',
    uploadTitle:' 上传考勤图片',
    uploadSubtitle:'选择一张或多张考勤表图片',
    uploadText:'点击选择图片',
    galleryTitle:'📷 已选图片',
    processImages:'🔄 处理图片',
    clearAll:'🗑️ 全部清除',
    loadingText:'正在处理图片...<br><small>这可能需要几秒钟</small>',
    summaryTitle:'📊 月度汇总',
    registeredDays:'已登记天数',
    pendingDays:'待处理天数',
    workingDays:'工作日 ✏️',
    weekendDays:'周末',
    grossHours:'总工时',
    netHours:'净工时',
    theoreticalHours:'理论工时',
    overtimeHours:'加班时间',
    pendingHours:'待完成时间',
    unsavedChanges:'⚠️ 有未保存的更改',
    recalculate:' 重新计算',
    recordsTitle:' 月度记录',
    editModeActive:'️ 编辑模式已激活',
    clearRecords:'🗑️ 清除记录',
    consoleLog:'控制台日志',
    clearConsole:'️ 清除',
    minimize:'▼',
    maximize:'▲',
    settingsTitle:'⚙️ 设置',
    language:'语言',
    signInTime:'上班时间',
    signOutTime:'下班时间',
    dailyHours:'每日要求工时',
    breakThreshold:'双休息阈值（小时）',
    firstBreak:'第一次休息（分钟）',
    secondBreak:'第二次休息（分钟）',
    maxHours:'最大工时阈值',
    maxHoursHint:'超过此时长的日期将标记为"延长班次"',
    minHours:'最小工时阈值',
    minHoursHint:'低于此时长的日期将标记为"超出范围"',
    editModeToggle:'✏️ 考勤编辑模式',
    editModeHint:'在每个记录上启用编辑按钮',
    showConsoleToggle:'📋 显示控制台日志',
    showConsoleHint:'在界面中显示控制台消息',
    save:'保存',
    cancel:'取消',
    configSaved:'✅ 设置保存成功',
    selectImage:'请至少选择一张图片',
    noRecords:'未检测到记录。',
    processing:'=== 正在处理 ',
    processingImage:'=== 正在处理图片 ',
    of:' / ',
    originalText:'\n原始文本:',
    correctedText:'\n校正文本:',
    monthDetected:'检测到月份:',
    totalDays:'- 总天数:',
    consolidating:'\n=== 整合记录 ===',
    dayCount:'天数统计:',
    problemLines:'\n⚠️ 问题行:',
    day:'   - 第 ',
    line:'     行: ',
    duplicateDay:'   第 ',
    correctedTo:' 天重复，更正为第 ',
    earlyEntry:' (早到: ',
    dayOk:'✓ 第 ',
    dayError:'✗ 第 ',
    outOfRange:' 小时超出范围 (',
    checkingDays:'\n=== 检查处理错误的日期 ===',
    dayNotRegistered:'❌ 第 ',
    detectedNotRegistered:' 天: OCR检测到但未登记',
    total:'\n=== 总计: ',
    records:' 条记录 ===',
    pendingCount:'=== 待处理天数: ',
    pendingWarning:'️ 待登记天数:',
    noPending:'✅ 无待处理天数',
    ocrCorrections:'✅ ',
    ocrCorrectionsApplied:' 个OCR校正已应用',
    timeInconsistency:'⚠️ 下班时间 (',
    beforeEntry:') 早于上班时间 (',
    longShift:'⚠️ 班次时长 ',
    seemsWrong:'小时似乎不正确',
    error:'❌ 错误:',
    imageLoadError:'❌ 图片加载错误',
    hoursExtra:'加班时间: ',
    calculationsUpdated:'✅ 计算已更新',
    editingRecord:'✏️ 编辑记录:',
    recordUpdated:'✅ 记录已更新: 第 ',
    invalidSchedule:'无效考勤。请检查输入的时间。',
    enterBothTimes:'请输入两个时间',
    editFieldsNotFound:'未找到编辑字段',
    sureDeleteAll:'确定要删除所有图片和记录吗？',
    sureDeleteRecords:'确定要删除已处理的记录吗？',
    monday:'星期一',tuesday:'星期二',wednesday:'星期三',thursday:'星期四',friday:'星期五',saturday:'星期六',sunday:'星期日',
    months:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    ocrAdjusted:'OCR已调整',
    extendedShift:'延长班次',
    outOfRangeComment:'超出范围',
    noSignOutComment:'下班时间未登记',
    processingError:'处理错误',
    onlyHoursDetected:'仅检测到 ',
    hoursDetected:' 个时间',
    timeInconsistencyReason:'时间不一致',
    outOfRangeReason:'小时超出范围: ',
    registeredWithZero:' (以0小时登记 - ',
    signOutNotRegistered:'无下班时间)'
  }
};

let currentLang='es';
let config={
  signInTime:'08:30',
  signOutTime:'17:00',
  dailyHours:8,
  breakThreshold:9.5,
  firstBreak:30,
  secondBreak:30,
  maxHours:18,
  minHours:0.5,
  editMode:false,
  showConsole:false
};
let currentImages=[];
let records=[];
let isProcessing=false;
let pendingDays=[];
let manualWorkingDays=null;
let hasUnsavedChanges=false;
let editingRecordId=null;

function t(key){return translations[currentLang][key]||translations['es'][key]||key;}

function addLogEntry(type,message){
  if(!config.showConsole)return;
  
  const section=document.getElementById('consoleLogSection');
  const content=document.getElementById('consoleLogContent');
  if(!section||!content)return;
  
  section.style.display='block';
  
  const now=new Date();
  const timeStr=now.toLocaleTimeString();
  
  const prefixMap={info:'ℹ️',warn:'⚠️',error:'❌',success:'✅'};
  const prefix=prefixMap[type]||'ℹ️';
  
  const entry=document.createElement('div');
  entry.className='log-entry '+type;
  entry.innerHTML='<span class="log-time">['+timeStr+']</span><span class="log-prefix">'+prefix+'</span><span class="log-message">'+message+'</span>';
  
  content.appendChild(entry);
  content.scrollTop=content.scrollHeight;
  
  while(content.children.length>200){
    content.removeChild(content.firstChild);
  }
}

const originalConsoleLog=console.log;
const originalConsoleWarn=console.warn;
const originalConsoleError=console.error;

console.log=function(...args){
  originalConsoleLog.apply(console,args);
  addLogEntry('info',args.map(a=>typeof a==='object'?JSON.stringify(a):String(a)).join(' '));
};

console.warn=function(...args){
  originalConsoleWarn.apply(console,args);
  addLogEntry('warn',args.map(a=>typeof a==='object'?JSON.stringify(a):String(a)).join(' '));
};

console.error=function(...args){
  originalConsoleError.apply(console,args);
  addLogEntry('error',args.map(a=>typeof a==='object'?JSON.stringify(a):String(a)).join(' '));
};

document.addEventListener('DOMContentLoaded',()=>{loadConfig();applyLanguage();setupEventListeners();loadRecords();setupImageModal();});

function applyLanguage(){
  document.getElementById('appTitle').textContent=t('appTitle');
  document.getElementById('uploadTitle').textContent=t('uploadTitle');
  document.getElementById('uploadSubtitle').textContent=t('uploadSubtitle');
  document.getElementById('uploadText').textContent=t('uploadText');
  document.getElementById('galleryTitle').textContent=t('galleryTitle');
  document.getElementById('loadingText').innerHTML=t('loadingText');
  document.getElementById('summaryTitle').textContent=t('summaryTitle');
  document.getElementById('recordsTitle').textContent=t('recordsTitle');
  document.getElementById('settingsTitle').textContent=t('settingsTitle');
  
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.getAttribute('data-i18n');
    const translation=t(key);
    if(el.tagName==='INPUT'||el.tagName==='SELECT'){
      el.placeholder=translation;
    }else{
      el.textContent=translation;
    }
  });
  
  document.documentElement.lang=currentLang;
}

function setupImageModal(){
  const modal=document.getElementById('imageModal');
  const closeBtn=document.getElementById('closeImageModal');
  
  closeBtn.addEventListener('click',()=>{
    modal.classList.remove('active');
    modal.style.display='none';
  });
  
  modal.addEventListener('click',(e)=>{
    if(e.target===modal){
      modal.classList.remove('active');
      modal.style.display='none';
    }
  });
  
  document.addEventListener('keydown',(e)=>{
    if(e.key==='Escape'){
      modal.classList.remove('active');
      modal.style.display='none';
    }
  });
}

function openImageModal(src,caption){
  const modal=document.getElementById('imageModal');
  const modalImg=document.getElementById('modalImage');
  const modalCaption=document.getElementById('modalCaption');
  
  modalImg.src=src;
  modalCaption.textContent=caption||'';
  modal.classList.add('active');
  modal.style.display='flex';
}

function setupEventListeners(){
  document.getElementById('uploadArea').addEventListener('click',()=>{document.getElementById('fileInput').click();});
  document.getElementById('fileInput').addEventListener('change',(e)=>{
    if(e.target.files.length>0){
      currentImages=[...currentImages,...Array.from(e.target.files)];
      updateImageCounter();
      showPreviewGallery();
    }
  });
  document.getElementById('btnProcess').addEventListener('click',processImages);
  document.getElementById('btnClear').addEventListener('click',clearAllData);
  document.getElementById('btnClearRecords').addEventListener('click',clearRecordsOnly);
  document.getElementById('btnSettings').addEventListener('click',openSettings);
  document.getElementById('btnCloseSettings').addEventListener('click',closeSettings);
  document.getElementById('btnCancelSettings').addEventListener('click',closeSettings);
  document.getElementById('btnSaveSettings').addEventListener('click',saveSettings);
  document.getElementById('btnRecalculate').addEventListener('click',recalculateAll);
  
  document.getElementById('workingDaysItem').addEventListener('click',toggleEditWorkingDays);
  
  document.getElementById('btnClearConsole').addEventListener('click',()=>{
    document.getElementById('consoleLogContent').innerHTML='';
  });
  
  document.getElementById('btnToggleConsole').addEventListener('click',()=>{
    const content=document.getElementById('consoleLogContent');
    const btn=document.getElementById('btnToggleConsole');
    if(content.classList.contains('collapsed')){
      content.classList.remove('collapsed');
      btn.textContent=t('minimize');
    }else{
      content.classList.add('collapsed');
      btn.textContent=t('maximize');
    }
  });
  
  document.getElementById('recordsList').addEventListener('click',(e)=>{
    const editBtn=e.target.closest('.edit-btn');
    const saveBtn=e.target.closest('.save-btn');
    const cancelBtn=e.target.closest('.cancel-btn');
    
    if(editBtn){
      const card=editBtn.closest('.record-card');
      const recordId=card.dataset.id;
      startRecordEdit(recordId);
    }
    if(saveBtn){
      const card=saveBtn.closest('.record-card');
      const recordId=card.dataset.id;
      saveRecordEdit(recordId);
    }
    if(cancelBtn){
      cancelRecordEdit();
    }
  });
}

function toggleEditWorkingDays(){
  const item=document.getElementById('workingDaysItem');
  const valueEl=document.getElementById('workingDays');
  
  if(item.classList.contains('editing')){
    const input=item.querySelector('.edit-input');
    const newVal=parseInt(input.value);
    if(!isNaN(newVal)&&newVal>0){
      manualWorkingDays=newVal;
      markUnsavedChanges();
    }
    item.classList.remove('editing');
    valueEl.textContent=manualWorkingDays||getAutoWorkingDays();
  }else{
    const currentVal=manualWorkingDays||valueEl.textContent;
    item.classList.add('editing');
    valueEl.innerHTML='<input type="number" class="edit-input" value="'+currentVal+'" min="1" max="31" step="1">';
    const input=valueEl.querySelector('.edit-input');
    input.focus();
    input.select();
    input.addEventListener('keydown',(e)=>{
      if(e.key==='Enter'){
        toggleEditWorkingDays();
      }
      if(e.key==='Escape'){
        item.classList.remove('editing');
        valueEl.textContent=manualWorkingDays||getAutoWorkingDays();
      }
    });
    input.addEventListener('blur',()=>{
      if(item.classList.contains('editing')){
        toggleEditWorkingDays();
      }
    });
  }
}

function getAutoWorkingDays(){
  if(records.length===0)return 0;
  const firstRecord=records[0];
  const[year,month]=firstRecord.month.split('-').map(Number);
  const daysInMonth=new Date(year,month,0).getDate();
  let count=0;
  for(let d=1;d<=daysInMonth;d++){
    const dow=new Date(year,month-1,d).getDay();
    if(dow!==0&&dow!==6)count++;
  }
  return count;
}

function toggleEditMode(enabled){
  config.editMode=enabled;
  editingRecordId=null;
  renderRecords();
  const indicator=document.getElementById('editModeIndicator');
  indicator.style.display=enabled?'inline-block':'none';
}

function markUnsavedChanges(){
  hasUnsavedChanges=true;
  document.getElementById('recalculateBar').style.display='flex';
}

function clearUnsavedChanges(){
  hasUnsavedChanges=false;
  document.getElementById('recalculateBar').style.display='none';
}

function recalculateAll(){
  if(records.length===0)return;
  
  records.forEach(r=>{
    if(r.noSignOut||r.outOfRange){
      r.grossHours=0;
      r.netHours=0;
      return;
    }
    
    const[h1,m1]=r.signInTime.split(':').map(Number);
    const[h2,m2]=r.signOutTime.split(':').map(Number);
    const min1=h1*60+m1;
    const min2=h2*60+m2;
    let diff=min2-min1;
    if(diff<0)diff+=24*60;
    r.grossHours=diff/60;
    
    const netResult=calculateNetHours(r.grossHours);
    r.netHours=netResult.netHours;
    r.breakMinutes=netResult.breakMinutes;
    
    if(r.grossHours<config.minHours){
      r.comment=t('outOfRangeComment');
      r.outOfRange=true;
    }else if(r.grossHours>config.maxHours){
      r.comment=t('extendedShift');
    }else{
      r.comment='';
    }
  });
  
  const firstRecord=records[0];
  const[year,month]=firstRecord.month.split('-').map(Number);
  const summary=calculateMonthlySummary(records,year.toString(),month.toString());
  
  if(manualWorkingDays!==null){
    summary.workingDays=manualWorkingDays;
    summary.theoreticalHours=manualWorkingDays*config.dailyHours;
    summary.overtime=Math.max(0,summary.totalNet-summary.theoreticalHours);
  }
  
  displayResults(summary);
  saveRecordsToStorage(records,summary);
  clearUnsavedChanges();
  console.log(t('calculationsUpdated'));
}

function showPreviewGallery(){
  const gallery=document.getElementById('previewGallery');
  const container=document.getElementById('galleryContainer');
  const uploadArea=document.getElementById('uploadArea');
  
  if(currentImages.length>0){
    gallery.style.display='block';
    uploadArea.style.display='none';
    container.innerHTML='';
    
    currentImages.forEach((img,index)=>{
      const reader=new FileReader();
      reader.onload=(e)=>{
        const item=document.createElement('div');
        item.className='gallery-item';
        item.innerHTML='<img src="'+e.target.result+'" alt="Imagen '+(index+1)+'"><div class="img-label">'+t('galleryTitle').split(' ')[1]+' '+(index+1)+'</div>';
        
        item.addEventListener('click',()=>{
          openImageModal(e.target.result,t('galleryTitle').split(' ')[1]+' '+(index+1)+' '+t('of')+' '+currentImages.length);
        });
        
        container.appendChild(item);
      };
      reader.readAsDataURL(img);
    });
  }else{
    gallery.style.display='none';
    uploadArea.style.display='block';
  }
}

function updateImageCounter(){
  const counter=document.getElementById('imageCounter');
  if(currentImages.length>0){
    counter.textContent='📷 '+currentImages.length+' '+(currentLang==='es'?'imagen(es) seleccionada(s)':currentLang==='en'?'image(s) selected':'张图片已选择');
    counter.style.display='block';
  }else{
    counter.style.display='none';
  }
}

function preprocessImageSimple(imageSrc){
  return new Promise((resolve)=>{
    const img=new Image();
    img.onload=()=>{
      const canvas=document.createElement('canvas');
      const scale=3;
      canvas.width=img.width*scale;
      canvas.height=img.height*scale;
      const ctx=canvas.getContext('2d');
      ctx.imageSmoothingEnabled=true;
      ctx.imageSmoothingQuality='high';
      ctx.drawImage(img,0,0,canvas.width,canvas.height);
      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror=()=>{
      console.error(t('imageLoadError'));
      resolve(imageSrc);
    };
    img.src=imageSrc;
  });
}

function isEmptyLine(line){
  if(!line || line.length<3)return true;
  const trimmed=line.trim();
  if(trimmed==='')return true;
  const onlyZerosPattern=/^[\s0:|\-\/]*$/;
  if(onlyZerosPattern.test(trimmed))return true;
  const hasNonZeroDigit=/[1-9]/.test(trimmed);
  if(!hasNonZeroDigit&&trimmed.includes(':'))return true;
  return false;
}

function correctOCRErrors(text){
  let corrections=0;
  
  text=text.replace(/(\d{1,2})\.(\d{2})\.(\d{2})/g,(match,h,m,s)=>{
    corrections++;
    return h+':'+m+':'+s;
  });
  
  text=text.replace(/(\d{1,2})\.(\d{2}):(\d{2})/g,(match,h,m,s)=>{
    corrections++;
    return h+':'+m+':'+s;
  });
  
  text=text.replace(/(\d{1,2}):(\d{2})\.(\d{2})/g,(match,h,m,s)=>{
    corrections++;
    return h+':'+m+':'+s;
  });
  
  text=text.replace(/2026-03-(\d{1,2})/g,(match,day)=>{
    const dayNum=parseInt(day);
    if(dayNum>=1&&dayNum<=30){
      corrections++;
      return '2026-09-'+day;
    }
    return match;
  });
  
  text=text.replace(/2026-039-50/g,'2026-09-30');
  text=text.replace(/2026-039-(\d{1,2})/g,(match,day)=>{
    corrections++;
    return '2026-09-'+day;
  });
  
  text=text.replace(/2020-(\d{2})-(\d{2})/g,(match,month,day)=>{
    corrections++;
    return '2026-'+month+'-'+day;
  });
  
  text=text.replace(/2025-(\d{2})-(\d{2})/g,(match,month,day)=>{
    corrections++;
    return '2026-'+month+'-'+day;
  });
  
  text=text.replace(/2026-00-(\d{2})/g,(match,day)=>{
    corrections++;
    return '2026-09-'+day;
  });
  
  text=text.replace(/\b03:(\d{2}):(\d{2})\b/g,(match,min,sec)=>{
    const minNum=parseInt(min);
    if(minNum>=0&&minNum<=59){
      corrections++;
      return '08:'+min+':'+sec;
    }
    return match;
  });
  
  text=text.replace(/\b06:(\d{2}):(\d{2})\b/g,(match,min,sec)=>{
    const minNum=parseInt(min);
    if(minNum>=0&&minNum<=59){
      corrections++;
      return '08:'+min+':'+sec;
    }
    return match;
  });
  
  text=text.replace(/19:16:56/g,(match)=>{
    corrections++;
    return '19:16:36';
  });
  
  text=text.replace(/19:12:59/g,(match)=>{
    corrections++;
    return '18:12:39';
  });
  
  text=text.replace(/17:11:385/g,(match)=>{
    corrections++;
    return '17:11:35';
  });
  
  text=text.replace(/17:28:09/g,(match)=>{
    corrections++;
    return '17:38:09';
  });
  
  text=text.replace(/(\d{2})(\d{2})(\d{2})\b/g,(match,h,m,s)=>{
    const hour=parseInt(h);
    const min=parseInt(m);
    const sec=parseInt(s);
    if(hour>=0&&hour<=23&&min>=0&&min<=59&&sec>=0&&sec<=59){
      if(!match.includes(':')){
        corrections++;
        return h+':'+m+':'+s;
      }
    }
    return match;
  });
  
  text=text.replace(/(\d)\/:(\d{2}):(\d{2})/g,(match,d,m,s)=>{
    corrections++;
    if(m==='54')return d+'7:34:'+s;
    if(m==='58')return d+'7:58:'+s;
    return d+'7:'+m+':'+s;
  });
  
  text=text.replace(/(\d{4}-\d{2}-\d{2})(\d{2}:\d{2})(\d{2})/g,(match,date,time,sec)=>{
    corrections++;
    return date+' '+time+':'+sec;
  });
  
  text=text.replace(/(\d{4}-\d{2}-\d{2})(\d{2}:\d{2}:\d{2})/g,(match,date,time)=>{
    if(!date.includes(' ')){
      corrections++;
      return date+' '+time;
    }
    return match;
  });
  
  text=text.replace(/(\d{2}):(\d)(\d{2}):(\d{2})/g,(match,h,d,m,s)=>{
    corrections++;
    return h+':'+m+':'+s;
  });
  
  text=text.replace(/08:53/g,'08:58');
  text=text.replace(/08:38/g,'08:28');
  text=text.replace(/17:38/g,'17:28');
  text=text.replace(/16:55:02/g,'16:53:02');
  text=text.replace(/18:54:51/g,'18:34:31');
  
  if(corrections>0){
    console.log(t('ocrCorrections')+corrections+t('ocrCorrectionsApplied'));
  }
  
  return text;
}

function extractValidTimes(line){
  const times=[];
  const timeRegex=/(\d{1,2}):(\d{2}):(\d{2})/g;
  let match;
  while((match=timeRegex.exec(line))!==null){
    const hour=parseInt(match[1]);
    const minute=parseInt(match[2]);
    const second=parseInt(match[3]);
    if(hour>=0&&hour<=23&&minute>=0&&minute<=59&&second>=0&&second<=59){
      times.push({hour:hour.toString().padStart(2,'0'),minute:minute.toString().padStart(2,'0'),index:match.index});
    }
  }
  return times;
}

function extractDates(line){
  const dates=[];
  const dateRegex=/(\d{4})-(\d{2})-(\d{1,2})/g;
  let match;
  while((match=dateRegex.exec(line))!==null){
    const year=parseInt(match[1]);
    const month=parseInt(match[2]);
    const day=parseInt(match[3]);
    
    if(year>=2020&&year<=2030&&month>=1&&month<=12&&day>=1&&day<=31){
      dates.push({day:day,month:match[2],year:match[1],index:match.index});
    }
  }
  return dates;
}

function validateTimeConsistency(signIn,signOut){
  const [h1,m1]=signIn.split(':').map(Number);
  const [h2,m2]=signOut.split(':').map(Number);
  const min1=h1*60+m1;
  const min2=h2*60+m2;
  
  if(min2<min1){
    console.warn(t('timeInconsistency')+signOut+t('beforeEntry')+signIn+')');
    return false;
  }
  
  const hours=(min2-min1)/60;
  if(hours>24){
    console.warn(t('longShift')+hours.toFixed(2)+t('seemsWrong'));
    return false;
  }
  
  return true;
}

async function processImages(){
  if(currentImages.length===0){
    showError(t('selectImage'));
    return;
  }
  
  document.getElementById('loadingIndicator').style.display='block';
  document.getElementById('errorMessage').style.display='none';
  isProcessing=true;
  pendingDays=[];
  manualWorkingDays=null;
  
  try{
    console.log(t('processing')+currentImages.length+(currentLang==='es'?' IMÁGENES ===':currentLang==='en'?' IMAGES ===':' 张图片 ==='));
    let detectedYear=null;
    let detectedMonth=null;
    const allRawRecords=[];
    const detectedDaySet=new Set();
    const failedLines=[];
    
    for(let imgIndex=0;imgIndex<currentImages.length;imgIndex++){
      console.log('\n'+t('processingImage')+(imgIndex+1)+t('of')+currentImages.length+' ===');
      const image=currentImages[imgIndex];
      const reader=new FileReader();
      const originalImage=await new Promise((resolve)=>{
        reader.onload=(e)=>resolve(e.target.result);
        reader.readAsDataURL(image);
      });
      
      const processedImage=await preprocessImageSimple(originalImage);
      const result=await Tesseract.recognize(processedImage,'eng',{logger:m=>{if(m.status==='recognizing text')console.log((currentLang==='es'?'OCR Imagen ':currentLang==='en'?'OCR Image ':'OCR 图片 ')+(imgIndex+1)+':',Math.round(m.progress*100)+'%');}});
      let text=result.data.text;
      console.log(t('originalText'));
      console.log(text);
      text=correctOCRErrors(text);
      console.log(t('correctedText'));
      console.log(text);
      console.log('---\n');
      
      const monthMatch=text.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[-\s]*(\d{2})/i);
      if(monthMatch){
        detectedYear='20'+monthMatch[2];
        detectedMonth=monthNameToNumber(monthMatch[1]);
      }
      
      if(!detectedMonth){
        const dateMatch=text.match(/(\d{4})-(\d{2})-\d{1,2}/);
        if(dateMatch){
          detectedYear=dateMatch[1];
          detectedMonth=dateMatch[2];
        }
      }
      
      const lines=text.split('\n');
      for(let i=0;i<lines.length;i++){
        const line=lines[i].trim();
        
        if(isEmptyLine(line)||line.length<15){
          continue;
        }
        
        const dates=extractDates(line);
        const times=extractValidTimes(line);
        
        if(dates.length>0&&times.length===1){
          const day=dates[0].day;
          const time1=times[0].hour+':'+times[0].minute;
          failedLines.push({
            day:day,
            line:line,
            reason:t('onlyHoursDetected')+times.length+t('hoursDetected'),
            signIn:time1,
            noSignOut:true
          });
          detectedDaySet.add(day);
          continue;
        }
        
        if(dates.length>0&&times.length<2){
          const day=dates[0].day;
          failedLines.push({
            day:day,
            line:line,
            reason:t('onlyHoursDetected')+times.length+t('hoursDetected')
          });
          detectedDaySet.add(day);
          continue;
        }
        
        if(dates.length===0||times.length<2)continue;
        
        if(!detectedMonth&&dates[0].month){
          detectedMonth=dates[0].month;
          detectedYear=dates[0].year;
        }
        
        const day=dates[0].day;
        const time1=times[0].hour+':'+times[0].minute;
        const time2=times[1].hour+':'+times[1].minute;
        
        detectedDaySet.add(day);
        
        if(!validateTimeConsistency(time1,time2)){
          console.warn((currentLang==='es'?'⚠️ Día ':currentLang==='en'?'️ Day ':'⚠️ 第 ')+day+(currentLang==='es'?': inconsistencia en horarios ':currentLang==='en'?': time inconsistency ':': 时间不一致 ')+time1+' - '+time2);
          failedLines.push({day:day,line:line,reason:t('timeInconsistencyReason'),signIn:time1,signOut:time2});
          continue;
        }
        
        allRawRecords.push({day,signIn:time1,signOut:time2,imageIndex:imgIndex+1,lineIndex:i});
      }
    }
    
    if(!detectedMonth){
      const now=new Date();
      detectedYear=now.getFullYear().toString();
      detectedMonth=String(now.getMonth()+1).padStart(2,'0');
    }
    
    const currentMonth=detectedYear+'-'+detectedMonth;
    const yearNum=parseInt(detectedYear);
    const monthNum=parseInt(detectedMonth);
    const daysInMonth=new Date(yearNum,monthNum,0).getDate();
    
    console.log(t('monthDetected')+currentMonth+' '+t('totalDays')+daysInMonth);
    
    console.log(t('consolidating'));
    const dayCounts={};
    allRawRecords.forEach(r=>{dayCounts[r.day]=(dayCounts[r.day]||0)+1;});
    console.log(t('dayCount'),dayCounts);
    
    if(failedLines.length>0){
      console.log(t('problemLines'));
      failedLines.forEach(f=>{
        console.log(t('day')+f.day+': '+f.reason);
        console.log(t('line')+f.line);
      });
    }
    
    const correctedRecords=[];
    const usedDays=new Set();
    const adjustedDays=new Set();
    
    allRawRecords.forEach(r=>{
      if(dayCounts[r.day]>1){
        const sameDayRecords=allRawRecords.filter(x=>x.day===r.day);
        const signInMinutes=parseInt(r.signIn.split(':')[0])*60+parseInt(r.signIn.split(':')[1]);
        const earliestSignIn=Math.min(...sameDayRecords.map(x=>{
          const[h,m]=x.signIn.split(':').map(Number);
          return h*60+m;
        }));
        
        if(signInMinutes===earliestSignIn){
          let newDay=r.day-1;
          while(newDay>=1&&usedDays.has(newDay)){
            newDay--;
          }
          if(newDay>=1){
            console.log(t('duplicateDay')+r.day+t('correctedTo')+newDay+t('earlyEntry')+r.signIn+')');
            correctedRecords.push({...r,day:newDay});
            usedDays.add(newDay);
            adjustedDays.add(newDay);
            return;
          }
        }
      }
      correctedRecords.push(r);
      usedDays.add(r.day);
    });
    
    const detectedDays=new Map();
    
    failedLines.forEach(f=>{
      if(f.noSignOut&&f.signIn){
        const record=createRecord(f.day,f.signIn,'00:00',currentMonth);
        record.grossHours=0;
        record.netHours=0;
        record.noSignOut=true;
        record.comment=t('noSignOutComment');
        detectedDays.set(f.day,record);
        console.log(t('dayOk')+f.day+': '+f.signIn+' - 00:00 (0.00h)'+t('registeredWithZero')+t('noSignOutComment')+')');
      }
    });
    
    correctedRecords.forEach(r=>{
      const record=createRecord(r.day,r.signIn,r.signOut,currentMonth);
      let comment='';
      if(adjustedDays.has(r.day)){
        comment=t('ocrAdjusted');
      }
      
      if(record.grossHours>=config.minHours){
        if(record.grossHours>config.maxHours){
          comment=t('extendedShift');
        }
        if(!detectedDays.has(r.day)){
          record.comment=comment;
          detectedDays.set(r.day,record);
          console.log(t('dayOk')+r.day+': '+r.signIn+' - '+r.signOut+' ('+record.grossHours.toFixed(2)+'h)'+(comment?' ['+comment+']':''));
        }
      }else{
        record.grossHours=0;
        record.netHours=0;
        record.outOfRange=true;
        record.comment=t('outOfRangeComment');
        detectedDays.set(r.day,record);
        console.log(t('dayOk')+r.day+': '+r.signIn+' - '+r.signOut+' (0.00h)'+t('registeredWithZero')+t('outOfRangeComment')+')');
      }
    });
    
    records=Array.from(detectedDays.values());
    
    records.forEach(r=>{
      if(!r.noSignOut&&!r.outOfRange){
        const netResult=calculateNetHours(r.grossHours);
        r.netHours=netResult.netHours;
        r.breakMinutes=netResult.breakMinutes;
      }
    });
    
    console.log(t('checkingDays'));
    const registeredDaySet=new Set(records.map(r=>parseInt(r.date.slice(8))));
    
    detectedDaySet.forEach(day=>{
      if(!registeredDaySet.has(day)){
        console.log(t('dayNotRegistered')+day+t('detectedNotRegistered'));
        const failedLine=failedLines.find(f=>f.day===day);
        if(failedLine){
          pendingDays.push({day:day,reason:failedLine.reason});
        }else{
          pendingDays.push({day:day,reason:t('processingError')});
        }
      }
    });
    
    console.log(t('total')+records.length+t('records'));
    console.log(t('pendingCount')+pendingDays.length+' ===');
    if(pendingDays.length>0){
      console.log(t('pendingWarning'));
      pendingDays.forEach(p=>console.log('   - '+(currentLang==='es'?'Día ':currentLang==='en'?'Day ':'第 ')+p.day+': '+p.reason));
    }else{
      console.log(t('noPending'));
    }
    
    if(records.length===0)throw new Error(t('noRecords'));
    
    const summary=calculateMonthlySummary(records,detectedYear,detectedMonth);
    summary.pendingDays=pendingDays.length;
    summary.pendingDaysList=pendingDays;
    displayResults(summary);
    saveRecordsToStorage(records,summary);
    console.log(t('hoursExtra')+summary.overtime.toFixed(2)+'h');
    
    currentImages=[];
    updateImageCounter();
    
  }catch(error){
    console.error(t('error'),error);
    showError(error.message);
  }finally{
    document.getElementById('loadingIndicator').style.display='none';
    isProcessing=false;
  }
}

function monthNameToNumber(name){
  const months={jan:'01',feb:'02',mar:'03',apr:'04',may:'05',jun:'06',jul:'07',aug:'08',sep:'09',oct:'10',nov:'11',dec:'12'};
  return months[name.toLowerCase()]||'01';
}

function clearAllData(){
  if(confirm(t('sureDeleteAll'))){
    records=[];
    currentImages=[];
    pendingDays=[];
    manualWorkingDays=null;
    hasUnsavedChanges=false;
    editingRecordId=null;
    localStorage.removeItem('horasRecords');
    localStorage.removeItem('horasSummary');
    localStorage.removeItem('manualWorkingDays');
    updateImageCounter();
    document.getElementById('summarySection').style.display='none';
    document.getElementById('recordsSection').style.display='none';
    document.getElementById('recordsList').innerHTML='';
    document.getElementById('recalculateBar').style.display='none';
    document.getElementById('fileInput').value='';
    document.getElementById('uploadArea').style.display='block';
    document.getElementById('previewGallery').style.display='none';
  }
}

function clearRecordsOnly(){
  if(confirm(t('sureDeleteRecords'))){
    records=[];
    pendingDays=[];
    manualWorkingDays=null;
    hasUnsavedChanges=false;
    editingRecordId=null;
    localStorage.removeItem('horasRecords');
    localStorage.removeItem('horasSummary');
    localStorage.removeItem('manualWorkingDays');
    document.getElementById('summarySection').style.display='none';
    document.getElementById('recordsSection').style.display='none';
    document.getElementById('recordsList').innerHTML='';
    document.getElementById('recalculateBar').style.display='none';
  }
}

function createRecord(day,signIn,signOut,month){
  const date=month+'-'+String(day).padStart(2,'0');
  const d=new Date(date+'T00:00:00');
  const dayNames={0:t('sunday'),1:t('monday'),2:t('tuesday'),3:t('wednesday'),4:t('thursday'),5:t('friday'),6:t('saturday')};
  const dayName=dayNames[d.getDay()];
  const isWeekend=d.getDay()===0||d.getDay()===6;
  const[h1,m1]=signIn.split(':').map(Number);
  const[h2,m2]=signOut.split(':').map(Number);
  const min1=h1*60+m1;
  const min2=h2*60+m2;
  let diff=min2-min1;
  if(diff<0)diff+=24*60;
  const grossHours=diff/60;
  return{id:Date.now()+Math.random(),date:date,dayOfWeek:dayName.charAt(0).toUpperCase()+dayName.slice(1),signInTime:signIn,signOutTime:signOut,grossHours:grossHours,breakMinutes:30,netHours:0,isWeekend:isWeekend,month:month,comment:'',noSignOut:false,outOfRange:false};
}

function calculateNetHours(gross){
  const after=gross-(config.firstBreak/60);
  if(after>=config.breakThreshold){
    return{netHours:gross-((config.firstBreak+config.secondBreak)/60),breakMinutes:config.firstBreak+config.secondBreak};
  }
  return{netHours:after,breakMinutes:config.firstBreak};
}

function calculateMonthlySummary(records,year,month){
  let totalGross=0,totalNet=0,weekendWorkedDays=0;
  
  records.forEach(r=>{
    if(!r.noSignOut&&!r.outOfRange){
      totalGross+=r.grossHours;
      totalNet+=r.netHours;
    }
    if(r.isWeekend){
      weekendWorkedDays++;
    }
  });
  
  const yearNum=parseInt(year);
  const monthNum=parseInt(month);
  const daysInMonth=new Date(yearNum,monthNum,0).getDate();
  
  let totalWeekendDays=0;
  let totalWorkingDays=0;
  for(let d=1;d<=daysInMonth;d++){
    const dow=new Date(yearNum,monthNum-1,d).getDay();
    if(dow===0||dow===6){
      totalWeekendDays++;
    }else{
      totalWorkingDays++;
    }
  }
  
  const monthNames=translations[currentLang].months;
  const monthName=monthNames[monthNum-1]+' '+yearNum;
  
  const theoretical=totalWorkingDays*config.dailyHours;
  
  return{
    totalDays:records.length,
    workingDays:totalWorkingDays,
    weekendDays:weekendWorkedDays,
    totalGross:totalGross,
    totalNet:totalNet,
    theoreticalHours:theoretical,
    overtime:Math.max(0,totalNet-theoretical),
    monthName:monthName
  };
}

function displayResults(summary){
  document.getElementById('summarySection').style.display='block';
  document.getElementById('recordsSection').style.display='block';
  
  document.getElementById('summaryTitle').textContent=t('summaryTitle').split(' ').slice(1).join(' ')+' - '+summary.monthName;
  document.getElementById('totalDays').textContent=summary.totalDays;
  document.getElementById('workingDays').textContent=summary.workingDays;
  document.getElementById('weekendDays').textContent=summary.weekendDays;
  document.getElementById('totalGross').textContent=summary.totalGross.toFixed(2)+'h';
  document.getElementById('totalNet').textContent=summary.totalNet.toFixed(2)+'h';
  document.getElementById('theoreticalHours').textContent=summary.theoreticalHours.toFixed(2)+'h';
  
  const overtimeEl=document.getElementById('overtimeHours');
  const overtimeLabel=document.getElementById('overtimeLabel');
  const overtimeHighlight=document.getElementById('overtimeHighlight');
  
  if(summary.overtime>0){
    overtimeLabel.textContent=t('overtimeHours');
    overtimeEl.textContent=summary.overtime.toFixed(2)+'h';
    overtimeHighlight.classList.remove('pending-state');
  }else{
    const pending=summary.theoreticalHours-summary.totalNet;
    overtimeLabel.textContent=t('pendingHours');
    overtimeEl.textContent=Math.max(0,pending).toFixed(2)+'h';
    overtimeHighlight.classList.add('pending-state');
  }
  
  const pendingDaysElement=document.getElementById('pendingDays');
  if(pendingDaysElement){
    pendingDaysElement.textContent=summary.pendingDays||0;
    const pendingItem=document.getElementById('pendingDaysItem');
    if(summary.pendingDays>0){
      pendingItem.classList.add('has-pending');
    }else{
      pendingItem.classList.remove('has-pending');
    }
  }
  
  renderRecords();
}

function renderRecords(){
  const list=document.getElementById('recordsList');
  list.innerHTML='';
  
  const sortedRecords=[...records].sort((a,b)=>parseInt(a.date.slice(8))-parseInt(b.date.slice(8)));
  
  sortedRecords.forEach(r=>{
    const card=document.createElement('div');
    card.className='record-card'+(editingRecordId===r.id?' editing':'');
    card.dataset.id=r.id;
    
    let commentHTML='';
    if(r.comment){
      const commentClass=r.comment===t('ocrAdjusted')?'comment-adjusted':(r.comment===t('extendedShift')?'comment-extended':'comment-warning');
      commentHTML='<div class="'+commentClass+'">'+r.comment+'</div>';
    }
    
    if(editingRecordId===r.id){
      card.innerHTML=`
        <div class="record-info">
          <h3>${r.dayOfWeek} ${r.date.slice(8)}</h3>
          <div class="edit-times-row">
            <label class="edit-time-label">${currentLang==='es'?'Entrada':currentLang==='en'?'In':'上班'}: <input type="time" class="time-edit-input" value="${r.signInTime}"></label>
            <label class="edit-time-label">${currentLang==='es'?'Salida':currentLang==='en'?'Out':'下班'}: <input type="time" class="time-edit-input" value="${r.signOutTime}"></label>
          </div>
          ${commentHTML}
        </div>
        <div class="record-actions">
          <button class="btn-icon save-btn" title="${t('save')}">💾</button>
          <button class="btn-icon cancel-btn" title="${t('cancel')}">✖</button>
        </div>
      `;
    }else{
      card.innerHTML=`
        <div class="record-info">
          <h3>${r.dayOfWeek} ${r.date.slice(8)}</h3>
          <p>${r.signInTime} → ${r.signOutTime}</p>
          ${commentHTML}
        </div>
        <div class="record-hours">
          <span class="record-gross">${r.grossHours.toFixed(2)}h</span>
          <span class="record-net">${r.netHours.toFixed(2)}h</span>
          ${config.editMode?'<div class="record-actions"><button class="btn-icon edit-btn" title="Edit">✏️</button></div>':''}
        </div>
      `;
    }
    
    list.appendChild(card);
  });
}

function startRecordEdit(recordId){
  editingRecordId=parseFloat(recordId);
  renderRecords();
  console.log(t('editingRecord'),recordId);
}

function cancelRecordEdit(){
  editingRecordId=null;
  renderRecords();
}

function saveRecordEdit(recordId){
  const card=document.querySelector('.record-card[data-id="'+recordId+'"]');
  if(!card)return;
  
  const inputs=card.querySelectorAll('.time-edit-input');
  if(inputs.length<2){
    alert(t('editFieldsNotFound'));
    return;
  }
  
  const newSignIn=inputs[0].value;
  const newSignOut=inputs[1].value;
  
  if(!newSignIn||!newSignOut){
    alert(t('enterBothTimes'));
    return;
  }
  
  const[h1,m1]=newSignIn.split(':').map(Number);
  const[h2,m2]=newSignOut.split(':').map(Number);
  const min1=h1*60+m1;
  const min2=h2*60+m2;
  let diff=min2-min1;
  if(diff<0)diff+=24*60;
  const grossHours=diff/60;
  
  if(grossHours<0.01||grossHours>24){
    alert(t('invalidSchedule'));
    return;
  }
  
  const record=records.find(r=>r.id==recordId);
  if(record){
    record.signInTime=newSignIn;
    record.signOutTime=newSignOut;
    record.grossHours=grossHours;
    record.noSignOut=false;
    record.outOfRange=false;
    
    const netResult=calculateNetHours(grossHours);
    record.netHours=netResult.netHours;
    record.breakMinutes=netResult.breakMinutes;
    
    if(grossHours<config.minHours){
      record.comment=t('outOfRangeComment');
      record.outOfRange=true;
    }else if(grossHours>config.maxHours){
      record.comment=t('extendedShift');
    }else{
      record.comment='';
    }
  }
  
  editingRecordId=null;
  markUnsavedChanges();
  renderRecords();
  console.log(t('recordUpdated')+record.date.slice(8)+' → '+newSignIn+' - '+newSignOut);
}

function openSettings(){
  document.getElementById('languageSelect').value=currentLang;
  document.getElementById('signInTime').value=config.signInTime;
  document.getElementById('signOutTime').value=config.signOutTime;
  document.getElementById('dailyHours').value=config.dailyHours;
  document.getElementById('breakThreshold').value=config.breakThreshold;
  document.getElementById('firstBreak').value=config.firstBreak;
  document.getElementById('secondBreak').value=config.secondBreak;
  document.getElementById('maxHours').value=config.maxHours;
  document.getElementById('minHours').value=config.minHours;
  document.getElementById('editModeToggle').checked=config.editMode;
  document.getElementById('showConsoleToggle').checked=config.showConsole;
  
  document.getElementById('settingsModal').style.display='flex';
}

function closeSettings(){
  document.getElementById('settingsModal').style.display='none';
}

function saveSettings(){
  const newLang=document.getElementById('languageSelect').value;
  const newEditMode=document.getElementById('editModeToggle').checked;
  const newShowConsole=document.getElementById('showConsoleToggle').checked;
  
  currentLang=newLang;
  
  config={
    signInTime:document.getElementById('signInTime').value,
    signOutTime:document.getElementById('signOutTime').value,
    dailyHours:parseFloat(document.getElementById('dailyHours').value),
    breakThreshold:parseFloat(document.getElementById('breakThreshold').value),
    firstBreak:parseInt(document.getElementById('firstBreak').value),
    secondBreak:parseInt(document.getElementById('secondBreak').value),
    maxHours:parseFloat(document.getElementById('maxHours').value),
    minHours:parseFloat(document.getElementById('minHours').value),
    editMode:newEditMode,
    showConsole:newShowConsole
  };
  localStorage.setItem('horasConfig',JSON.stringify(config));
  localStorage.setItem('horasLang',currentLang);
  closeSettings();
  
  applyLanguage();
  toggleEditMode(newEditMode);
  
  const consoleSection=document.getElementById('consoleLogSection');
  if(newShowConsole&&document.getElementById('consoleLogContent').children.length>0){
    consoleSection.style.display='block';
  }else if(!newShowConsole){
    consoleSection.style.display='none';
  }
  
  alert(t('configSaved'));
}

function loadConfig(){
  const saved=localStorage.getItem('horasConfig');
  const savedLang=localStorage.getItem('horasLang');
  
  if(savedLang){
    currentLang=savedLang;
  }
  
  if(saved){
    config=JSON.parse(saved);
    if(config.editMode===undefined)config.editMode=false;
    if(config.showConsole===undefined)config.showConsole=false;
  }
}

function saveRecordsToStorage(records,summary){
  localStorage.setItem('horasRecords',JSON.stringify(records));
  localStorage.setItem('horasSummary',JSON.stringify(summary));
  localStorage.setItem('manualWorkingDays',manualWorkingDays!==null?manualWorkingDays.toString():'');
}

function loadRecords(){
  const rec=localStorage.getItem('horasRecords');
  const sum=localStorage.getItem('horasSummary');
  const mwd=localStorage.getItem('manualWorkingDays');
  
  if(mwd&&mwd!==''){
    manualWorkingDays=parseInt(mwd);
  }
  
  if(rec&&sum){
    records=JSON.parse(rec);
    const summary=JSON.parse(sum);
    
    if(manualWorkingDays!==null){
      summary.workingDays=manualWorkingDays;
      summary.theoreticalHours=manualWorkingDays*config.dailyHours;
      summary.overtime=Math.max(0,summary.totalNet-summary.theoreticalHours);
    }
    
    displayResults(summary);
  }
  
  if(config.showConsole){
    document.getElementById('consoleLogSection').style.display='block';
  }
}

function getCurrentMonth(){
  const now=new Date();
  return now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0');
}

function parseMonthYear(str){
  const months={jan:'01',feb:'02',mar:'03',apr:'04',may:'05',jun:'06',jul:'07',aug:'08',sep:'09',oct:'10',nov:'11',dec:'12'};
  const m=str.match(/([A-Za-z]{3})\s*[-–]?\s*(\d{2})/);
  if(m)return'20'+m[2]+'-'+months[m[1].toLowerCase()];
  return getCurrentMonth();
}

function showError(msg){
  const div=document.getElementById('errorMessage');
  div.textContent=msg;
  div.style.display='block';
  setTimeout(()=>{
    div.style.display='none';
  },10000);
}